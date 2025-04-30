<template lang="html">
    <div class="mx-auto w-25 counter container d-flex justify-content-center flex-column">
        <h2>Counter: </h2>
        <p class=" my-2 border border-primary">
            {{ counterStore.counterValue }}
            <span v-if="counterStore.isEven"> = Even</span>
            <span v-else> = Oneven</span>
        </p>
        <button class="btn btn-primary my-2 text-light" @click="increment()">+ 1</button>
        <button class="btn btn-primary my-2 text-light" @click="decrement()">- 1</button>
    </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter';
import { mapStores } from 'pinia';

export default {
    computed: {
        ...mapStores(useCounterStore) // => counterStore aangemaakt!
    },
    methods: {
        increment() {
            this.counterStore.increaseValue()
        },
        decrement() {
            this.counterStore.decreaseValue()
        }
    },   
}
</script>
