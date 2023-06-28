<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { MaybeRef, ref } from "vue";
import MyButton from "../../shared/MyButton/MyButton.vue";
import Modal from "../../shared/Modal/Modal.vue";
import MyInput from "../../shared/MyInput/MyInput.vue";
import { useStore } from "vuex";
import { AddOrderApi, IOrder } from "../../app/api/OrderApi";

const show = ref(false);
const props = defineProps(["count", "price"]);

const schema = yup.object<IOrder>({
    phone: yup.number().min(8).required("⚠ Укажите телефон"),
    name: yup.string().required("⚠ Укажите имя"),
    street: yup.string().required("⚠ Укажите улицу"),
    house: yup.string().required("⚠ Укажите дом"),
    city: yup.string().required("⚠ Укажите город"),
    apartment: yup.string(),
});

const { useFieldModel, errors, handleSubmit } = useForm<IOrder>({
    validationSchema: schema,
});

function showUpdate() {
    show.value = !show.value;
}

const [phone, name, street, house, city, apartment] = useFieldModel<MaybeRef>([
    "phone",
    "name",
    "street",
    "house",
    "city",
    "apartment",
]);

const store = useStore();

const onSubmit = handleSubmit((data: IOrder) => {
    data.count = props.count;
    data.price = props.price;
    data.product = store.state.basket;
    AddOrderApi(data)
        .then((e) => {
            store.commit("setBasket", e.result);
            show.value = !show.value;
        })
        .catch((e) => console.log(e));
});
</script>

<template>
    <MyButton color="orange" @click="showUpdate" type="fullSize"
        >К оформлению заказа
    </MyButton>
    <Modal @close="showUpdate" v-if="show">
        <form @submit="onSubmit" class="OrderAccept">
            <h1>Оформление заказа</h1>
            <br />
            <MyInput v-model="name" placeholder="Имя" />
            <span class="Danger"> {{ errors.name }}</span>
            <br />
            <MyInput
                type="number"
                v-model="phone"
                placeholder="Номер телефона"
            />
            <span class="Danger">{{ errors.phone }}</span>
            <br />
            <MyInput v-model="city" placeholder="Город" />
            <span class="Danger">{{ errors.city }}</span>
            <br />
            <MyInput v-model="street" placeholder="Улица" />
            <span class="Danger">{{ errors.street }}</span>
            <br />
            <MyInput v-model="house" placeholder="Дом" />
            <span class="Danger">{{ errors.house }}</span>
            <br />
            <span class="Info">Не обязательно*</span>
            <MyInput v-model="apartment" placeholder="Квартира" />
            <br />
            <MyButton color="orange" type="fullSize">Подвердить</MyButton>
        </form>
    </Modal>
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.OrderAccept {
    display: flex;
    flex-direction: column;
    input {
        width: 100%;
    }
    .Danger {
        color: red;
    }
    .Info {
        font-size: 13px;
        color: gray;
    }
}
</style>
