<script setup lang="ts">
import {onMounted} from 'vue'
import {useSearchStore} from './stores/search'

let searchStore:any = null;

onMounted(() => searchStore = useSearchStore());

const validate = (e: Event): Boolean => {
    const userData = (e.target as HTMLInputElement).value.trim();
    if (userData) return true;
    return false;
}

const searchHandler = (e: Event) => {
    if (!validate(e)) return;
    searchStore.sendRequest(e);
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

<style lang="scss" scoped>
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
