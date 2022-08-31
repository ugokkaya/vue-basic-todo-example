<template>
    <form @submit.prevent="todoAdd">
        <div class="flex mt-4">
            <input 
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
                placeholder="Görev Ekle"
                v-model="todoMsg">
            <button 
                class="flex-no-shrink p-2 border-2 rounded text-teal-400 border-teal-400 hover:text-white hover:bg-teal-400">
                Ekle
            </button>
        </div>
    </form>
</template>

<script setup>
import {ref, defineEmits} from 'vue'

const todoMsg = ref('')

const emit = defineEmits(['todoAdd'])

const todoAdd = () => {
    if(todoMsg.value === '')return;
     emit('todoAdd', todoMsg.value)
     todoMsg.value = ''
}

</script>
