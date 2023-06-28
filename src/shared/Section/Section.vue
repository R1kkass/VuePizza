<template>
    <div class="Section">
        <slot />
    </div>
</template>

<script lang="ts">
    export default {
        name: "SectionMy"
    }
</script>

<style lang="scss">
.Section{
    width: 1280px;
    margin: 0 auto;
    @media screen and (max-width: 1300px) {
        width: 90%;
    }
}
</style>