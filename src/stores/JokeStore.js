import { defineStore } from 'pinia';

export const useJokeStore = defineStore('joke', {
    state: () => ({
        jokes: [],
    }),
    getters: {
        newestJoke : state => {
            return state.jokes[state.jokes.length - 1];
        },
        sortedJokes : state => {
            return state.jokes.slice().reverse();
        },
    },
    actions: {
        async fetchJokeAsync() {
            try {
                const response = await fetch('https://icanhazdadjoke.com/', { 
                    headers: { Accept: 'application/json' } 
                })
                if(!response.ok) {
                    throw new Error('Failed to fetch joke. Status: ' + response.status + ' ' + response.statusText)
                }
                const data = await response.json()
                this.jokes.push(data.joke)
                console.log('Joke fetched succesfully!')
            } catch (error) {
                console.error(error)
            } 
        },
    },
});
