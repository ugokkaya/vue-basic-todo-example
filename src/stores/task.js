import {defineStore} from 'pinia';

export const useTaskStore = defineStore({
    id: 'taskStore',
    state: () => ({
      todoList: [],
      id: 0,  
    }),
    getters: {
        getTask(state) { 
           return state.todoList
        },
     },
     actions: {
        addTodo(item) {
          this.todoList.push({ text: item, id: this.id++, isDone: false })
        },
        deleteToDo(item) {
          this.todoList.splice(item, 1)
        },
        doneToDo(item) {
          this.todoList[item].isDone = true
        },
        unDoneToDo(item) {
          this.todoList[item].isDone = false
        },
     }
})
