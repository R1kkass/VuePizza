<template>
    <div class="w-[300px]">
        <div class="static">
            <div class="flex">
                <div
                    @click="show = !show"
                    class="relative flex items-center cursor-pointer MyInput text-base overflow-hidden w-[200px] h-[30px]"
                >
                    {{ value }}
                    <div class="absolute right-2 text-xs">
                        {{ !show ? "▼" : "▲" }}
                    </div>
                </div>
            </div>
            <Transition name="bounce">
                <div class="relative z-30 h-0">
                    <div
                        v-if="show"
                        class="absolute border rounded-lg overflow-hidden border-gray-400 w-[200px]"
                    >
                        <div
                            class="h-[30px] flex items-center ps-2 overflow-hidden cursor-pointer bg-white hover:bg-orange-600 hover:text-white transition z-50 border-y border-gray-400 w-[100%]"
                            @click="setValue(list.name)"
                            @key="list.name"
                            v-for="list in listValue"
                        >
                            {{ list.name }}
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";

const props = defineProps({
    listValue: Array as PropType<IList[]>,
    defaultValue: String,
});

const value = ref(props.defaultValue || props?.listValue?.[0].name);
const show = ref(false);

interface IList {
    name: String;
}
const emit = defineEmits(["setValue"]);

function setValue(name: String) {
    value.value = name;
    show.value = !show.value;
    emit("setValue", value);
}
</script>

<style>
.bounce-enter-active,
.bounce-leave-active {
    transition: opacity 0.5s ease;
}

.bounce-enter-from,
.bounce-leave-to {
    opacity: 0;
}
</style>
