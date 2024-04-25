<template lang="html">
    <div class="mx-auto w-25 counter container d-flex justify-content-center flex-column">
        <h2>Counter: </h2>
        <p class=" my-2 border border-primary">{{ counter }}</p>
        <button class="btn btn-primary my-2 text-light" @click="increment()">+ 1</button>
        <button class="btn btn-primary my-2 text-light" @click="decrement()">- 1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0 
        }
    },
    methods: {
        increment() {
            this.counter++; 
        },
        decrement() {
            this.counter--; 
        }
    },   
    computed: {
        isEven() {
            return this.counter % 2 === 0;
        }
    }
}
</script>
