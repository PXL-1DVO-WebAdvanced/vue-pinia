import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0,
    }),
    getters: {
        isEven(state) {
            return this.counter % 2 === 0; 
        }
    },
    actions: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
    },
});
