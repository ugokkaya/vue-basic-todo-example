<template>
   <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
          <h1 class="text-grey-darkest">Görev Listesi</h1>
         <TodoAdd @todoAdd="todoAdd($event)" />
      </div>
      <div>
        <TodoList   :taskList="taskStore.getTask" 
                    @todoDelete="todoDelete($event)" 
                    @todoDone="todoDone($event)" 
                    @todoUnDone="todoUnDone($event)" />
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue'    
    import { useTaskStore } from "../../stores/task.js"
    import TodoAdd from "./Add.vue";
    import TodoList from "./List.vue";

    const taskStore = useTaskStore()
    const tasks = ref([])
    const todoAdd = (event) => {
        taskStore.addTodo(event)
    }

    const todoDelete = (event) => {
        taskStore.deleteToDo(event)
    }

    const todoDone = (event) => {
        taskStore.doneToDo(event)
    }
    const todoUnDone = (event) => {
        taskStore.unDoneToDo(event)
    }

</script>
