<template>
    <div class="overflow-x-auto w-full">
        <table class="table">
            <!-- head -->
            <thead>
                    <tbody>
                    <!-- row 2 -->
                    <tr v-for="(project, index) in projectsStore.projectList" :key="project.id" class="hover">
                        <th>{{ index + 1 }}</th>
                        <td>{{ project.name }}</td>
                        <td>{{ project.tasks.length }}</td>
                        <td>
                            <progress class="progress progress-primary w-56" value="10" max="100"></progress>
                        </td>
                    </tr>
                </tbody>
                </thead>
            </table>
        </div>

        <InputModal
        @value="projectsStore.addProject"
        :open="inputModalOpen"
        @close="inputModalOpen = false"
        placeholder="Ingrese el nombre del proyecto"
        title="Crear nuevo proyecto"
        subtitle="Complete el formualrio para crear un nuevo proyecto"
        />

        <CustomModal :open="CustomModalOpen">

            <template #header>
                <h1 class="text-3xl">Titulo custom</h1>
            </template>

            <template #body>
                <p>saludo desde el body</p>
            </template>

            <template #footer>
                <div class="flex justify-end mt-4">
                    <button @click="CustomModalOpen = false" class="btn mr-4">Close</button>
                    <button @click="CustomModalOpen = false" class="btn btn-primary">Aceptar</button>
                </div>
            </template>

        </CustomModal>

        <FabButton button-color="green" position="bottom-left" @click="CustomModalOpen = true">
            <AddCircle />
        </FabButton>

        <FabButton button-color="indigo" position="bottom-right" @click="inputModalOpen = true">
            <AddCircle />
        </FabButton>
</template>

<script lang="ts" setup>
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import { ref } from 'vue';
import { useProjectStore } from '../sotres/project.store';

const inputModalOpen = ref(false);
const CustomModalOpen = ref(false);
const projectsStore = useProjectStore();




</script>

<style scoped></style>
