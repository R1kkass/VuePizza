<template>
    <p></p>
    <div class="ButtonSize">
        <input
            @input="setTaste('Маленькая', '-200')"
            id="size"
            name="size"
            type="radio"
            value="Маленькая"
        />
        <label for="size"> Маленькая </label>
        <input
            @input="setTaste('Средняя', '0')"
            id="size2"
            checked
            name="size"
            type="radio"
            value="Средняя"
        />
        <label for="size2">Средняя </label>
        <input
            id="size3"
            @input="setTaste('Большая', '200')"
            type="radio"
            name="size"
            value="Большая"
        />
        <label for="size3"> Большая </label>
    </div>
    <div class="ButtonType ButtonSize">
        <input
            @input="setDough('Традиционное')"
            id="size4"
            checked
            type="radio"
            name="size2"
            value="Традиционное"
        />
        <label for="size4"> Традиционное </label>
        <input
            id="size5"
            @input="setDough('Тонкое')"
            type="radio"
            name="size2"
            value="Тонкое"
        />
        <label for="size5"> Тонкое </label>
    </div>
</template>

<script lang="ts">
export default {
    methods: {
        setTaste(name: String, price: String) {
            this.$emit("setTaste", {
                name,
                price,
            });
        },
        setDough(e: String) {
            this.$emit("setDough", e);
        },
    },
};
</script>

<style lang="scss">
.ButtonSize {
    margin-top: 10px;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    background-color: #dddddd;
    height: 30px;
    div {
        width: 100px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        cursor: pointer;
    }
    label {
        font-size: 14px;
        transition: 0.3s;
        width: 32%;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
    }
    input {
        &:checked + label {
            cursor: default;
            background: white;
            box-shadow: 0 3px 5px 2px rgb(193, 193, 193);
        }
        display: none;
    }
}

.ButtonType {
    display: flex;
    margin-top: 10px;
    label {
        font-size: 18px;
        width: 50%;
    }
}
</style>
