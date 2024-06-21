<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input class="bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-white flex-grow outline-none px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800" v-model="model" placeholder="Найти" />
</template>