<template>
    <div>
    <MyButton @click="showUpdate" type="medium" color="orange">
        <p class="text-xs">Добавить</p>
    </MyButton>
    <Modal @close="showUpdate" v-if="show">
        <form @submit="onSubmit" class="flex flex-col gap-2 p-2">
            <MyInput v-model="name" placeholder="Имя" />
            <span class="Danger">{{ errors.name }}</span>

            <MyInput v-model="price" placeholder="Цена" />

            <span class="Danger">{{ errors.price }}</span>

            <MyInput v-model="category" placeholder="Категория" />
            <span class="Danger">{{ errors.category }}</span>
            <FileInput :file="file" @previewFiles="previewFiles"></FileInput>

            <MyInput v-model="weight" placeholder="Количесво/вес/литраж" />
            <span class="Danger">{{ errors.weight }}</span>

            <textarea
                v-model="ingredients"
                class="MyInput h-[100px]"
                rows="5"
                placeholder="Ингредиенты"
            ></textarea>
            <MyButton type="fullSize" color="orange">Добавить</MyButton>
        </form>
    </Modal>
</div>
</template>

<script setup lang="ts">
import Modal from "@/shared/Modal/Modal.vue";
import MyButton from "@/shared/MyButton/MyButton.vue";
import MyInput from "@/shared/MyInput/MyInput.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import { useStore } from "vuex";
import { IPizza } from "../../app/api/PizzaApi";
import FileInput from "@/shared/FileInput/FileInput.vue";

const show = ref(false);

const schema = yup.object<IPizza>({
    category: yup.string().required("⚠ Укажите категорию"),
    name: yup.string().required("⚠ Укажите название"),
    weight: yup.string().required("⚠ Укажите вес"),
    ingredients: yup.string().required("⚠ Укажите ингредиент"),
    price: yup.string().required('⚠ Укажите цену')
});

const { useFieldModel, errors, handleSubmit } = useForm<IPizza>({
    validationSchema: schema,
});

function showUpdate() {
    show.value = !show.value;
}

const [category, name, weight, ingredients, price] = useFieldModel([
    "category",
    "name",
    "weight",
    "ingredients",
    "price"
]);
export interface InputFileEvent extends Event {
    target: HTMLInputElement;
}
const store = useStore();
const file = ref();
function previewFiles(event: InputFileEvent) {
    file.value = event?.target?.files?.[0];
}
const onSubmit = handleSubmit((data: IPizza) => {
    
    if (file.value) {
        data.file = file.value;
        store.dispatch("createPizza", data).then(() => (show.value = false));
        file.value = null;
    }
});
</script>
