<template>
    <main
        class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
        <div class="text-center">
            <p class="font-semibold sm:text-5xl text-3xl text-orange-600">
                404
            </p>
            <h1
                class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
                Страница не найдена
            </h1>
            <p class="mt-6 text-base leading-7 text-gray-600">
                Извините, мы не смогли найти страницу, которую вы ищете.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <router-link
                    to="/"
                    class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >На главную</router-link
                >
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
    document.title = "Ошибка 404"
</script>
