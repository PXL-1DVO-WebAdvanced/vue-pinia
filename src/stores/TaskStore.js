import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
    state: () => ({
        id: 0,
        tasks: [],
    }),
    getters: {
        todo : state => {
            return state.tasks.filter(task => !task.isDone)
        },
    },
    actions: {
        fetchData(){
            this.addTask({
                id: 1,
                title: 'Task 1',
                isDone: false
            }),
            this.addTask({
                id: 2,
                title: 'Task 2',
                isDone: true
            })
        },
        addTask(task){
            task.id = this.id++;
            this.tasks.push(task);
        },
        removeTask(taskId){
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        }
        
    },
});
