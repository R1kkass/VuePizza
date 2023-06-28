<template></template>

<script lang="ts">
import jwtDecode from "jwt-decode";

export default {
    mounted() {
        if (localStorage.getItem("access_token"))
            localStorage.setItem(
                "basketId",
                jwtDecode(localStorage.getItem("access_token") || "").basketId
            );
        if (!localStorage.getItem("basketId")) {
            localStorage.setItem("basketId", String(Date.now()));
        }
    },
};
</script>
