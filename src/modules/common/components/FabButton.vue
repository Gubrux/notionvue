<template>
    <button
        @click="$emit('click')"
        :class="[
            'btn btn-circle fixed bottom-10 right-10 shadow-secondary shadow-2xl',
            position,
            buttonColor,
        ]"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
interface Props {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    buttonColor?: 'green' | 'indigo' | 'amarillo';
}

withDefaults(defineProps<Props>(), {
    position: 'bottom-right',
});

defineEmits(['click']);
</script>

<style scoped>
.green {
    background-color: rgb(79, 236, 71);
}
.indigo {
    background-color: rgb(114, 44, 245);
}

.amarillo {
    background-color: rgb(255, 255, 0);
}

.top-left {
    top: 10px;
    left: 10px;
}
.top-right {
    top: 10px;
    right: 10px;
}
.bottom-left {
    bottom: 10px;
    left: 10px;
}
.bottom-right {
    bottom: 10px;
    right: 10px;
}
</style>
