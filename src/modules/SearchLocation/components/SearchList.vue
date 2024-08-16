<script setup lang="ts">

interface ListData{
    display_name?: string 
}

defineProps<{
  data: ListData
}>()

</script>

<template>
<li>
    {{ data.display_name }}
</li>
</template>

