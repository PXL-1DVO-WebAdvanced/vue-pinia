import { defineStore } from 'pinia';

export const useJokeStore = defineStore('joke', {
    state: () => ({
        jokes: [],
    }),
    getters: {
        newestJoke: (state) => state.jokes[state.jokes.length - 1],
        sortedJokes: (state) => state.jokes.slice().reverse(),
    },
    actions: {
        fetchJoke() {
            fetch('https://icanhazdadjoke.com/', { 
                headers: { Accept: 'application/json' } 
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch joke. Status: ' + response.status + ' ' + response.statusText)
                }
                return response.json()
            })
            .then((data) => {
                this.jokes.push(data.joke)
            })
            .catch((error) => {
                console.error(error)
            });
        },
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
        }
    },
});
