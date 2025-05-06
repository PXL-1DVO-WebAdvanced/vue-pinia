<template>
    <div>
      <h2>Todo List</h2>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="newTodo" @keyup.enter="addTodo()">
        
        <button class="btn btn-primary" @click="addTodo()">Add</button>
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="task in taskStore.allTasks" :key="task.id">
          <input type="checkbox" v-model="task.isDone" /> {{ task.title }}
          <button class="btn btn-danger btn-sm float-end" @click="removeTodo(task)">Remove</button>
        </li>
      </ul>
    </div>
</template>
<script>
import { useTaskStore } from '@/stores/task';
import { mapStores } from 'pinia';

export default {
  computed: {
        ...mapStores(useTaskStore) // => taskStore aangemaakt!
    },
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        const newTask = {
          id: 0,
          title: this.newTodo,
          isDone: false
        }

        this.taskStore.addTask(newTask);
        this.newTodo = '';
      }
    },
    removeTodo(task) {
      this.taskStore.removeTask(task)
    }
  },
};
</script>
  