<template>
    <label class="File">
        <input @change="previewFiles" type="file" placeholder="IMG URL" />
        <span >Выберите файл</span>
        <div>{{ file?.name || " "}}</div>

    </label>
</template>

<script setup lang="ts">
const emit = defineEmits(["previewFiles"]);
defineProps({
    file: {
        type: Object,
    },
});
interface InputFileEvent extends Event {
    target: HTMLInputElement;
}
function previewFiles(e: InputFileEvent) {
    emit("previewFiles", e);
}
</script>

<style lang="scss">
.File {
    width: 100%;
    display: flex;
    input {
        display: none;
    }
    span {
        width: 200px;
        background-color: orangered;
        color: white;
        padding: 10px;
        border-radius: 20px;
        max-width: 200px;
        overflow: hidden;
        display: block;
        width: fit-content;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            background:rgb(223, 59, 0);
        }
        position: relative;
        z-index: 2;
    }
    div{
        border: 1px solid rgb(194, 194, 194);
        width: calc(100% - 180px);
        max-width: 200px;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding-left: 25px;
        border-radius: 0 20px 20px 0px;
        position: relative;
        left: -20px;
    }
}
</style>
