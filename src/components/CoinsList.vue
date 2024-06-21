<script setup lang="ts">
import CoinsListItem from './CoinsListItem.vue';
import SearchField from './SearchField.vue';

import type { CoinData } from '../models';

import { ref, watch } from 'vue';

const props = defineProps<{ items: CoinData[] }>();

const searchText = ref('');
const filteredItems = ref(props.items);

watch(searchText, () => {
    filteredItems.value = props.items
        .filter(item => item.name
            .toLowerCase()
            .split(' ')
            .some(s => s.startsWith(searchText.value.toLowerCase()))
        );
});
</script>

<template>
  <div class="w-[440px] flex flex-col border rounded-3xl border-gray-200 dark:border-gray-800 shadow-2xl shadow-slate-200 dark:shadow-slate-900 dark:bg-slate-950">
    <div class="flex flex-row px-5 pt-5 pb-3">
      <SearchField v-model="searchText" />
    </div>
    <div v-if="filteredItems.length > 0" class="overflow-y-auto scroll-m-0">
      <ul>
        <CoinsListItem v-for="item in filteredItems" :data="item" />
      </ul>
    </div>
    <div v-else class="flex flex-col justify-center items-center flex-grow">
      <div class="i-mynaui-search text-slate-300 dark:text-slate-700 w-16 h-16"/>
      <p class="mt-4 mb-14 text-gray-900 dark:text-gray-100">Нет результатов</p>
    </div>
  </div>
</template>