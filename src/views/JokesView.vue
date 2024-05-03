<template lang="html">
    <div class="mx-auto w-75 counter container d-flex justify-content-center flex-column">
        <h2>Jokes: </h2>
        <button @click="sort">Sorteer</button>
        <ul>
            <li v-for="(joke, index) in jokes" :key="index">{{ joke }}</li>
        </ul>
    </div>
</template>
<script>
import { useJokeStore } from '@/stores/JokeStore';
export default {
    data() {
        return {
            jokeStore: useJokeStore(),
            showReversed: false
        }
    },
    methods: {
        sort() {
            this.showReversed = !this.showReversed;
        }
    },
    computed: {
        jokes() {
            if(this.showReversed)
                return this.jokeStore.sortedJokes;
            else
                return this.jokeStore.jokes;
        }
    }
}
</script>
