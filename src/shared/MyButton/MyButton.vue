
<template>
    <button :class="type + ' ' + color">
        <slot></slot>
    </button>
</template>

<style lang="scss">
    button{
        border-radius: 30px;
        border: none;
        font-weight: 700;
        cursor: pointer;
        transition: 0.3;
        &:disabled{
            opacity: 0.5;
        }
    }

    .large{
    width: 100px;
    height: 45px;
    font-size: 16px;
    }

    .fullSize{
        width: 100%;
        height: 45px;
    }

    .orange{
        background: orangered;
        color: white;
        transition: 0.3s;
        &:hover{
            background: rgb(223, 59, 0);
        }
    }

    .gray{
        border: none;
        border-radius: 20px;
        font-size: 18px;
        background-color: rgb(205, 205, 205);
        color: rgb(92, 99, 112);
        transition: 0.3s;
        &:hover{
            color: rgb(65, 65, 65);
        }
    }

    .lightOrange{
        background: rgba(255, 69, 0, 0.3);
        color: orangered;
        transition: 0.3s;
        &:hover{
            background: rgba(223, 59, 0, 0.5);
        }
    }

    .medium{
        width: 80px;
        font-size: 16px;
        height: 40px;
    }
</style>


<script  lang="ts">
    export default{
        props: {
            color: String,
            type: String
        }
    }
</script>
