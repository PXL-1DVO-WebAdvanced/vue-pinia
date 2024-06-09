<template lang="html">
    <div class="mx-auto w-25 counter container d-flex justify-content-center flex-column">
        <h2>Counter: </h2>
        <p class=" my-2 border border-primary">
            {{ counterStore.counter }}
            <span v-if="this.counterStore.isEven"> == Even</span>
            <span v-if="!this.counterStore.isEven"> != Oneven</span>
        </p>
        <button class="btn btn-primary my-2 text-light" @click="increment()">+ 1</button>
        <button class="btn btn-primary my-2 text-light" @click="decrement()">- 1</button>
    </div>
</template>

<script>
import { useCounterStore } from '@/stores/CounterStore.js';
export default {
    data() {
        return {
            counterStore : useCounterStore(),
        }
    },
    methods: {
        increment() {
            this.counterStore.increment(); 
        },
        decrement() {
            this.counterStore.decrement(); 
        }
    },
}
</script>
