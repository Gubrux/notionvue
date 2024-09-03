<template>
    <div class="flex flex-col">
        <TopMenu />
        <main class="flex flex-row">
            <!-- side menu -->
            <SideMenu />
            <!-- routerview -->
            <router-view />
        </main>
    </div>
</template>

<script lang="ts" setup>
import TopMenu from '../../common/components/TopMenu.vue';
import SideMenu from '../Components/SideMenu.vue';
</script>

<style scoped></style>
vue-project\src\modules\common\components\TopMenu.vue
