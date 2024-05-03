import { defineStore } from 'pinia';

export const useAuthStore = defineStore('AuthStore', {
    state: () => ({
        user: null,
    }),
    getters: {
        isAuthenticated: (state) => {
            console.log('isAuthenticated', state.user);
            return state.user !== null;
        },
    },
    actions: {
        login(username, password) {
            this.user = { username: username };
            console.log('login', this.user);
        },
        logout() {
            this.user = null;
            console.log('logout');
        }
    },
});
