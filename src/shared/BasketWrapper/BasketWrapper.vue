<template></template>

<script lang="ts">
import jwtDecode from "jwt-decode";

export default {
    computed: {
        token(){
            return jwtDecode(localStorage.getItem('access_token') || '')
        }
    },
    mounted() {
        if (localStorage.getItem("access_token"))
            localStorage.setItem(
                "basketId",
                this.token.basketId
            );
        if (!localStorage.getItem("basketId")) {
            localStorage.setItem("basketId", String(Date.now()));
        }
    },
};
</script>
