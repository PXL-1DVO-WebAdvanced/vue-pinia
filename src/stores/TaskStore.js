import { defineStore } from 'pinia';

export const useTaskStore = defineStore('TaskStore', {
    state: () => ({
        id: 0,
        tasks: [],
    }),
    getters: {
        todos: (state) => {
            return state.tasks.filter(task => !task.isDone);
        },
    },
    actions: {
        fetchData() {
            this.addTask({ title: 'Task 1', isDone: false });
            this.addTask({ title: 'Task 2', isDone: true });
        },
        addTask(task) {
            task.id = this.id++;
            this.tasks.push(task);
        },
        removeTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
    },
});
