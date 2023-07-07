<template>
    <div class="h-[100px] flex border border-gray-200">
        <div>
            <p>
                {{ user?.role }}
            </p>
            <p>
                {{ user?.email }}
            </p>
            <SelectUserRole :id="user?._id" :role="user?.role"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {PropType} from 'vue'
import {IAdminUser} from "@/app/api/UsersApi.ts"
import SelectUserRole from '../../entities/SelectUserRole/SelectUserRole.vue';

const props= defineProps({
    user: Object as PropType<IAdminUser>
})


</script>
