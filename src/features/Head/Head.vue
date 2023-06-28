<template>
    <Header></Header>
    <Nav></Nav>
</template>

<script lang="ts">
import Header from '../../entities/Header/Header.vue';
import Nav from '../Nav/Nav.vue';

export default{
    components: { Header, Nav }
};
</script>