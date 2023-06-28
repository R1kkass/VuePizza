<template></template>

<script lang="ts">
import { RefreshApi } from "../../app/api/AuthApi";
export default {
    mounted() {
        RefreshApi();
    },
};
</script>
