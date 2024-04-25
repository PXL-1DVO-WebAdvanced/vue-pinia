<template>
<div class="container mt-5">
    <h2 class="mb-4">Login</h2>
    <form @submit.prevent="login()" class="needs-validation">
      <div class="mb-3">
        <label for="username" class="form-label">Username:</label>
        <input type="text" id="username" v-model="username" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Navigate to the homepage without any validation
        this.$router.push('/');
      }
    }
  };
  </script>