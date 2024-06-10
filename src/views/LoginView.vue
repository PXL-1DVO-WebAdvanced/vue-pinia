<template>
<div class="container mt-5">
    <h2 class="mb-4">Login</h2>
    <form @submit.prevent="login()">
      <div class="mb-3">
        <label for="username" class="form-label">Username:</label>
        <input type="text" id="username" class="form-control" v-model="username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" id="password" class="form-control" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <p> {{ authStore.loginError }} </p>
    </form>
  </div>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/AuthStore';
  export default {
    data() {
      return {
        authStore: useAuthStore(),
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        this.authStore.login(this.username,this.password);
        this.$router.back();
      }
    }
  };
  </script>