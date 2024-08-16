<script setup lang="ts">
import {pinia} from '@/stores/index'
import {useSearchStore} from './stores/search'
import SearchList from './components/SearchList.vue';

const searchStore = useSearchStore(pinia);

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
        Найти локацию:
    </label>

    <input 
        class="location__search" 
        type="text" 
        name="location" 
        placeholder="адрес" 
        @keyup="searchHandler">
    
    <ul class="location__list">
        <SearchList class="location__item"
            v-for="item in searchStore.result?.data"
                :data="item"
                :key="item.place_id" />
    </ul>
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

.location__search {
    margin-bottom: 40px;
    padding: 10px;
    border-radius: 50px;
    border: 5px solid rgb(214, 214, 214);
    outline: none;
    transition: border .3s;
    &:focus {
        border: 5px solid rgb(186 210 255);
    }
}

.location__item {
    padding: 30px;
    border-bottom: 1px solid gray;
}
</style>
