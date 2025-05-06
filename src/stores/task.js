import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: []
    }),
    getters: {
        numberOfTodos: (state) => state.tasks.filter(t => t.isDone === false).length,
        allTasks: (state) => state.tasks.toReversed()
    },
    actions: {
        addTask(task) {
            task.id = this.tasks.length + 1
            //TODO: call api
            this.tasks.push(task)
        },
        removeTask(task) {
            const index = this.tasks.indexOf(task)
            this.tasks.splice(index, 1);
          }
    },
});
