<template>
    <div class="Nav">
        <div class="Container">
        <div class="Info">
            <div>
                Пицца
            </div>
            <div>
                Комбо
            </div>
            <div>
                Напитки
            </div>
            <div>
                Другие товары
            </div>
            <div>
                Акции
            </div>
            <div>
                Контакты
            </div>
            <div>
                О нас
            </div>
        </div>
        <div class="">
            <MyButton @click="$store.commit('switchBasket')" color="orange" type="large">
                Корзина
            </MyButton>
        </div>
    </div>

    <Transition mode="out-in">
        <Basket v-if="$store.state.show" key="save"></Basket>
    </Transition>
    </div>
</template>

<script lang="ts">
import Basket from '../../shared/Basket/Basket.vue';
import MyButton from '../../shared/MyButton/MyButton.vue';

export default {
    components:{ MyButton, Basket },
    data() {
        return{
            basket: false
        }
    },
    methods: {
        showBasket(){
            this.basket=!this.basket
        }
    }
}
</script>

<style>

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>

<style lang="scss">

.Nav{
    
    height: 60px;
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    .Container{
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 1280px;
        @media screen and (max-width: 1300px) {
            width: 100%;
        }
    }
    .Info{
        display: flex;
        gap: 10px;
        div{
            font-size: 14px;
        }
    }
}
</style>