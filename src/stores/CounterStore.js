import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0,
    }),
    getters: {
        isEven: (state) => {
            return state.counter % 2 === 0;
          },
    },
    actions: {
        init() {
            this.counter = 10; 
        },
        increment() {
            this.counter++; 
        },
        decrement() {
            this.counter--; 
        }
    },
});
