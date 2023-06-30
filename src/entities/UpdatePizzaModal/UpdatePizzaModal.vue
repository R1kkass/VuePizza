<template>
    <MyButton
        @click="showUpdate"
        type="mini"
        class="text-xs h-[30px] ps-2 pe-2 mr-3"
        color="orange"
    >
        <p class="text-xs">Обновить</p>
    </MyButton>
    <Modal @close="showUpdate" v-if="show">
        <form @submit="onSubmit" class="flex flex-col gap-2 p-2">
            <h2>Обновить</h2>
            <MyInput :myvalue="name" v-model="name" placeholder="Имя" />
            <span class="Danger">{{ errors.name }}</span>

            <MyInput :myvalue="price" v-model="price" placeholder="Цена" />
            <span class="Danger">{{ errors.price }}</span>

            <MyInput
                :myvalue="category"
                v-model="category"
                placeholder="Категория"
            />
            <span class="Danger">{{ errors.category }}</span>
            <FileInput :file="file" @previewFiles="previewFiles"></FileInput>

            <MyInput
                :myvalue="weight"
                v-model="weight"
                placeholder="Количесво/вес/литраж"
            />
            <span class="Danger">{{ errors.weight }}</span>

            <MyInput :myvalue="status" v-model="status" placeholder="Статус" />
            <span class="Danger">{{ errors.status }}</span>

            <textarea
                v-model="ingredients"
                class="MyInput h-[100px]"
                rows="5"
                placeholder="Ингредиенты"
            ></textarea>
            <MyButton type="fullSize" color="orange">Обновить</MyButton>
        </form>
    </Modal>
</template>

<script setup lang="ts">
import Modal from "@/shared/Modal/Modal.vue";
import MyButton from "@/shared/MyButton/MyButton.vue";
import MyInput from "@/shared/MyInput/MyInput.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { MaybeRef, PropType, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { IPizza } from "../../app/api/PizzaApi";
import FileInput from "@/shared/FileInput/FileInput.vue";

const show = ref(false);
const props = defineProps({
    pizza: {
        type: Object as PropType<IPizza>,
        required: true,
    },
});
const file = ref();
const schema = yup.object<IPizza>({
    category: yup.string().required("⚠ Укажите категорию"),
    name: yup.string().required("⚠ Укажите название"),
    image: yup.string().required("⚠ Укажите ссылку"),
    weight: yup.string().required("⚠ Укажите вес"),
    ingredients: yup.string().required("⚠ Укажите ингредиент"),
    price: yup.string().required("⚠ Укажите цену"),
    status: yup.string().required("⚠ Укажите статус"),
});

const { useFieldModel, errors, handleSubmit } = useForm<IPizza>({
    validationSchema: schema,
    initialValues: {
        name: props.pizza.name,
        category: props.pizza.category,
        image: props.pizza.image,
        weight: props.pizza.weight,
        ingredients: props.pizza.ingredients,
        price: props.pizza.price,
        status: props.pizza.status,
    },
});

function previewFiles(event: InputFileEvent) {
    file.value = event.target.files?.[0];
}

interface InputFileEvent extends Event {
    target: HTMLInputElement;
}

function showUpdate() {
    show.value = !show.value;
}

const [category, name, image, weight, ingredients, price, status] =
    useFieldModel<MaybeRef>([
        "category",
        "name",
        "image",
        "weight",
        "ingredients",
        "price",
        "status",
        "file",
    ]);

const store = useStore();

const onSubmit = handleSubmit((data: IPizza) => {
    data.id = props.pizza._id;
    data.file = file.value;
    store.dispatch("updatePizza", data).then(() => (show.value = false));
    file.value = null;
});

</script>

<style lang="scss"></style>
