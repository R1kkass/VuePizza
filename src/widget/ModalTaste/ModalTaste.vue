<template>
    <MyButton color="orange" type="medium" @click="show = !show">
        <p class="text-xs">Добавить</p>
    </MyButton>
    <Modal v-if="show" @close="show = !show">
        <form @submit="onSubmit" class="Form">
            <MyInput v-model="name" placeholder="Название" />
            <span>{{ errors.name }}</span>
            <MyInput v-model="price" type="number" placeholder="Цена" />
            <span>{{ errors.price }}</span>
            <FileInput :file="file" @previewFiles="previewFiles"></FileInput>
            <MyButton color="orange" type="fullSize">Добавить</MyButton>
        </form>
    </Modal>
</template>

<script lang="ts" setup>
import { MaybeRef, ref } from "vue";
import Modal from "../../shared/Modal/Modal.vue";
import MyInput from "../../shared/MyInput/MyInput.vue";
import FileInput from "@/shared/FileInput/FileInput.vue";
import MyButton from "@/shared/MyButton/MyButton.vue";
import * as yup from "yup";
import { useForm } from "vee-validate";
import { useStore } from "vuex";
import { InputFileEvent } from "@/entities/AddPizzaModal/AddPizzaModal.vue";
import { ITaste } from "@/app/api/TasteApi";

const show = ref(false);
const file = ref();
function previewFiles(event: InputFileEvent) {
    file.value = event?.target?.files?.[0];
}
const schema = yup.object<ITaste>({
    price: yup.number().required("⚠ Укажите цену"),
    name: yup.string().required("⚠ Укажите название"),
});

const { useFieldModel, errors, handleSubmit } = useForm<ITaste>({
    validationSchema: schema,
});

const [price, name] = useFieldModel<MaybeRef>(["price", "name"]);

const store = useStore();

const onSubmit = handleSubmit((data: ITaste) => {
    let formData = new FormData();
    if (file.value) {
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("file", file.value);

        store
            .dispatch("createTaste", formData)
            .then(() => (show.value = !show.value));
    }
});
</script>

<style lang="scss">
.Form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 5px;
}
</style>
