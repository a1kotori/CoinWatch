<script setup lang="ts">
import type { CoinData } from '../models';

defineProps<{ data: CoinData }>();
</script>

<template>
  <li class="flex flex-row justify-between px-5 py-3 border-b last-of-type:border-b-0 border-gray-200 dark:border-gray-800">
    <div class="">
      <p class="text-gray-900 dark:text-white font-semibold">{{ data.name }}</p>
      <p class="text-gray-600 dark:text-gray-400 text-sm">{{ data.ticker }}</p>
    </div>
    <p class="text-gray-900 dark:text-white font-medium">${{ data.price < 1 ? data.price : data.price.toFixed(2) }}</p>
  </li>
</template>