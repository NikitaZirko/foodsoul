<script setup lang="ts">
import {debounce} from '@/utils/debounce';

const validate = (e: Event): Boolean => {
    const userData = (e.target as HTMLInputElement).value.trim();
    if (userData) return true
    return false
}

const sendRequest = debounce((e: Event) => {
    
}, 300);

const searchHandler = (e: Event) => {
    if (!validate(e)) return;
    sendRequest(e)
}
</script>

<template>
<div class="location">
    <label
        class="location__label">
        Найди локацию:
    </label>
    <input 
        class="location__search" 
        type="text" 
        name="location" 
        placeholder="адрес" 
        @keyup="searchHandler">
</div>
</template>

<style scoped>
.location {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
}
.location__label {
    padding-bottom: 20px;
}
</style>
