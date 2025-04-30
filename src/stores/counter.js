import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0
    }),
    getters: {
        counterValue: (state) => state.counter,
        isEven: (state) => state.counter % 2 == 0,
    },
    actions: {
        increaseValue() {
            this.counter++
        },
        decreaseValue() {
            this.counter--
        }
    },
});
