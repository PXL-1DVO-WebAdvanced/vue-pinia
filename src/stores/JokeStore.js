import { defineStore } from 'pinia';

export const useJokeStore = defineStore('joke', {
    state: () => ({
        jokes: [],
    }),
    getters: {
        newestJoke: (state) => state.jokes[state.jokes.length - 1],
    },
    actions: {
        fetchJoke() {
            fetch('https://icanhazdadjoke.com/', { 
                headers: { Accept: 'application/json' } 
            })
            .then((response) => response.json())
            .then((data) => {
                this.jokes.push(data.joke)
            })
        },
        async fetchJokeAsync() {
            try {
                const response = await fetch('https://icanhazdadjoke.com/', { 
                    headers: { Accept: 'application/json' } 
                })
                const data = await response.json()
                this.jokes.push(data.joke)
            } catch (error) {
                console.error(error)
            }
        }
    },
});
