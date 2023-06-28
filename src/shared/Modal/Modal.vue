<template>
    <Teleport to="body">
        <div @click="close" class="Modal">
            <div @click.stop.passive class="Modal__content">
                <div class="Main">
                    <slot></slot>
                </div>
                <div @click="close" class="Close">
                    <Close></Close>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
import Close from "../../assets/Close.vue";
import { Transition } from "vue";
export default {
    components: { Close, Transition },
    name: "Modal",
    methods: {
        close() {
            this.$emit("close");
        },
    },
    mounted() {
        document.body.style.overflowY = "hidden";
    },
    unmounted() {
        document.body.style.overflowY = "scroll";
    },
};
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.Modal {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 20px;
        width: fit-content;
        max-height: 90vh;
        overflow: visible;
        overflow-y: scroll;
        overflow: visible;
        height: fit-content;
        min-width: 400px;
        min-height: 400px;
        position: relative;
        padding: 15px;
        max-width: 90%;
        @media screen and (max-width: 430px) {
            min-width: 90%;
        }
        .Close {
            position: absolute;
            right: -50px;
            cursor: pointer;
            z-index: 999;
        }
        .Main {
            overflow-y: scroll;
        }
    }
}
</style>
