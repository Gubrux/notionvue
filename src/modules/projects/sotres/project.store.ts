import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

export const useProjectStore = defineStore('projects', () => {
    const projects = ref(useLocalStorage<Project[]>('projects', []));

    const addProject = (name: string) => {
        if (name.length === 0) return;

        projects.value.push({
            id: uuidv4(),
            name: name,
            tasks: [],
        });
    };

    return {
        // properties
        projects,
        // getters son para obtener valores computados de las propiedades del store (como un computed) y no mutan el estado del store (no se pueden modificar) y se acceden como funciones (no como propiedades) en los componentes que los usan (por eso se llaman como funciones) y se pueden usar para filtrar, ordenar, etc.
        projectList: computed(() => [...projects.value]),
        noProjects: computed(() => projects.value.length === 0),

        // actions
        addProject,
    };
});
