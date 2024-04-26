<template>
    <div>
      <h2>Todo List</h2>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="newTodo" @keyup.enter="addTodo()">
        <button class="btn btn-primary" @click="addTodo()">Add</button>
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" /> {{ todo }}
          <button class="btn btn-danger btn-sm float-end" @click="removeTodo(index)">Remove</button>
        </li>
      </ul>
    </div>
</template>
<script>

export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push(this.newTodo.trim());
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  },
};
</script>
  