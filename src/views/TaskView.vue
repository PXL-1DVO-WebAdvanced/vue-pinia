<template>
    <div>
      <h2>Todo List
        <span class="badge bg-primary text-secondary">
                {{ taskStore.todos.length }}
        </span>
      </h2>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="newTodo" @keyup.enter="addTodo()">
        <button class="btn btn-primary" @click="addTodo()">Add</button>
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="task in this.taskStore.tasks" :key="task.id">
          <p>{{ task.title }}</p>
          <input type="checkbox" v-model="task.isDone" />
          <input type="text" v-model="task.title" />
          <button class="btn btn-danger btn-sm float-end" @click="removeTodo(task.id)">Remove</button>
        </li>
      </ul>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';
import { useAuthStore } from '@/stores/AuthStore';

export default {
  data() {
    return {
      taskStore: useTaskStore(),
      newTodo: '',
      authStore: useAuthStore()
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.taskStore.addTask({title: this.newTodo.trim(), isDone: false});
        this.newTodo = '';
      }
    },
    removeTodo(id) {
      this.taskStore.removeTask(id);
    }
  },
  created() {
    if(!this.authStore.isAuthenticated) {
      this.$router.push('/login');
      return;
    }
    console.log('TaskView created');
  },
};
</script>
  