<script lang="ts">
import MyButton from '../../shared/MyButton/MyButton.vue';

    export default{
    components: {MyButton}
}
</script>

<template>
  <header class="Header">
    <div class="Header__first">
        <div class="Logo">

        </div>
        <div class="Delivery">
            <h4>
                Доставка пиццы за 30 минут
            </h4>
        </div>
        <div class="Login">
            <MyButton color="gray" type="medium">Вход</MyButton>
        </div>
    </div>
    
  </header>
  
</template>

<style lang="scss">
    .Header{
        width: 1280px;
        margin: 0 auto;
        @media screen and (max-width: 1300px) {
            width: 100%;
        }
        &__first{
            display: flex;
            height: 60px;
            align-items: center;
            justify-content: space-between;
            padding-inline: 10px;
            .Login{
            }
        }

        &__second{
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            .Info{
                display: flex;
                gap: 10px;
                div{
                    font-size: 14px;
                }
            }
            .Basket{
                
            }
        }
    }
</style>
