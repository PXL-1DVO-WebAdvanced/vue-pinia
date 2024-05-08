<template lang="html">
    <div class="mx-auto w-25 counter container d-flex justify-content-center flex-column">
        <h2>Counter: </h2>
        <p class=" my-2 border border-primary">
            {{ counterStore.counter }}
            <span v-if="counterStore.isEven"> == Even</span>
            <span v-if="!counterStore.isEven"> == Oneven</span>
        </p>
        <input type="text" class="form-control my-2" v-model="counterStore.counter" ref="counterInput">
        <button class="btn btn-primary my-2 text-light" @click="increment()">+ 1</button>
        <button class="btn btn-primary my-2 text-light" @click="decrement()">- 1</button>
    </div>
</template>

<script>
import { useCounterStore } from '@/stores/CounterStore';
import { useJokeStore } from '@/stores/JokeStore';

export default {
    data() {
        return {
            counterStore: useCounterStore(),
            jokeStore: useJokeStore()
        }
    },
    methods: {
        increment() {
            this.counterStore.increment(); 
            this.$refs.counterInput.focus();
            //this.$refs.counterInput.setSelectionRange(0, this.$refs.counterInput.value.length);
        },
        decrement() {
            this.counterStore.decrement(); 
            //this.$refs.counterInput.select();
            this.$refs.counterInput.focus();
        }
    }, 
    updated() {
        this.jokeStore.fetchJokeAsync();
    }  
}
</script>
