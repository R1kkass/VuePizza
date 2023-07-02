<template>
    <Modal>
        <div class="OrderModal w-[70vw] flex gap-5 flex-column justify-center">
            <div
                v-for="product in products"
                :key="product._id"
                class="border  gap-2 text-sm h-fit flex flex-wrap rounded-3xl border-orange-700 overflow-hidden p-4 bg-slate-50"
            >
                <div class="h-[180px] w-[180px] h-px-130">
                    <img
                        class="w-[180px]"
                        :src="product?.product?.image"
                    />
                </div>
                <div>
                    <p>Id продукта: {{ product?._id }}</p>
                    <p>Цена: {{ product?.price }} ₽</p>
                    <p>Количество порций: {{ product?.count }}</p>
                    <p>Имя: {{ product?.product?.name }}</p>
                    <p>Размер: {{ product?.product?.size || product?.product?.weight }}</p>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script lang="ts">
import Modal from "@/shared/Modal/Modal.vue";
import Order from "@/assets/Order.vue";
import { PropType } from "vue";
import {IProduct} from '@/app/api/OrderApi'

export default {
    name: "OrderModal",
    data() {
        return {
            show: false
        }
    },
    components: { Modal, Order },
    props: {
        products: {
            type:Array as PropType<IProduct[]>,
            required: false
        }
    },
};
</script>

<style lang="scss">
.OrderModal {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
