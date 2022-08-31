<template>
    <div class="flex mb-4 items-center" v-for="(task, index) in taskList" :key="index">
       
        <p class="w-full text-grey-darkest" :class="task.isDone ? 'line-through': ''">{{task.text}}</p>
        <div class="w-3/4">
            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-300 hover:bg-green-300" @click="todoDone(index)" v-show="task.isDone==false">Tamamlandı</button>
            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-blue-400 border-blue-300 hover:bg-blue-300" @click="todoUnDone(index)" v-show="task.isDone">Geri Al</button>
            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-400 hover:text-white hover:bg-red-400" @click="todoDelete(index)">Sil</button>
        </div>
    </div>
</template>

<script setup>
    import {ref, defineProps} from 'vue'    

    const props = defineProps(['taskList'])

    const emit = defineEmits(['todoDelete', 'todoDone', 'todoUnDone'])

    const todoDelete = (id) => {
        emit('todoDelete', id)
    }

    const todoDone = (id) => {
        emit('todoDone', id)
    }

    const todoUnDone = (id) => {
        emit('todoUnDone', id)
    }
</script>