<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { watchEffect } from 'vue';

const mode = useColorMode();

watchEffect(() => {
  document.documentElement.style.setProperty('color-scheme', mode.value);
});

function toggleColorMode() {
  mode.value = mode.value == 'dark' ? 'light' : 'dark';
}
</script>

<template>
  <nav class="border-b border-gray-200 dark:border-gray-700 flex justify-between items-center p-4 h-12">
    <span class="text-gray-900 dark:text-gray-100 font-semibold">CoinWatch</span>
    <div class="i-mynaui-moon w-6 h-6 text-gray-800 dark:text-gray-200 cursor-pointer" @click="toggleColorMode" />
  </nav>
</template>