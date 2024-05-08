<template lang="html">
    <div class="mx-auto w-25 counter container d-flex justify-content-center flex-column">
        <h2>Counter: </h2>



        <p class="my-2 border border-primary" :class="className">
            {{ counterStore.counter }} (class binding)
        </p>


        <p class="my-2 border border-primary" :class="[critical, low, normal, high]">
            {{ counterStore.counter }} (class binding met ternary operator)
            <!-- <span v-if="counterStore.isEven"> == Even</span>
            <span v-if="!counterStore.isEven"> == Oneven</span> -->
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
    computed: {
        className() {
            if(this.counterStore.counter < 5) return 'critical';
            if(this.counterStore.counter >= 5 && this.counterStore.counter < 10) return 'low';
            if(this.counterStore.counter >= 10 && this.counterStore.counter < 30) return 'normal';
            if(this.counterStore.counter >= 30) return 'high';
        },
        critical() {
            return { critical: this.counterStore.counter < 5 };
        },
        low() {
            return { low: this.counterStore.counter >= 5 && this.counterStore.counter < 10 };
        },
        normal() {
            return { normal: this.counterStore.counter >= 10 && this.counterStore.counter < 30 };
        },
        high() {
            return { high: this.counterStore.counter >= 30 };
        }
    },
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
        },
        decrement() {
            this.counterStore.decrement(); 
            this.$refs.counterInput.focus();
        }
    }, 
    updated() {
        this.jokeStore.fetchJokeAsync();
    }  
}
</script>
<style scoped>
    .critical { color: red; }
    .low { color: orange; }
    .normal { color: black; }
    .high { color: green; }
</style>