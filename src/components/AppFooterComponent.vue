<template>
    <footer class="bg-body-tertiary text-center text-lg-start">
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
            <p  @click="fetchJoke()">{{ jokeStore.newestJoke }}</p>
        </div>
    </footer>
</template>
<script>
import { useJokeStore } from '@/stores/JokeStore';

export default {
    data() {
        return {
            jokeStore: useJokeStore()
        }
    },
    // async mounted() {
    //     await this.jokeStore.fetchJokeAsync();
    // },
    mounted() {
        this.jokeStore.fetchJokeAsync();
        console.log('mounted');
    },
    methods: {
        async fetchJoke() {
            await this.jokeStore.fetchJokeAsync();
        }
    }
}
</script>
<style scoped>
    p {
        cursor: pointer;
    }
</style>
