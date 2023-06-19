<template>
    <Teleport to="body">
        <div  class="Basket" @click="$store.commit('switchBasket')">
            <div class="Basket__close">
                <Close />
            </div>
            <div @click.stop.prevent="" class="Basket__content">

            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
import Close from "../../assets/Close.vue"

export default {
    components: {Close}
}
</script>

<style scope lang="scss">
    .Basket{
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: flex-end;
        z-index: 10;
        &__content{

            background: white;
            width: 430px;
            height: 100vh;
        }
        &__close{
            cursor: pointer;
            margin-right: 20px;
            height: fit-content;
            margin-top: auto;
            margin-bottom: auto;
        }
    }
</style>