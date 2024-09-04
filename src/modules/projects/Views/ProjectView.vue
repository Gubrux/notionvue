<template>
    <div>
        <h1>{{ id }}</h1>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    id: string;
}

defineProps<Props>();


</script>
