<script setup lang="ts">
import CoinsList from './CoinsList.vue';
import NavBar from './NavBar.vue';

import type { CoinData } from '../models';

import { onMounted, ref } from 'vue';
import { includedCoins } from '../data';

import axios from 'axios';

const items = ref<CoinData[]>([]);
const dataLoaded = ref<boolean>(false);

onMounted(async () => {
  const ids = includedCoins.map(c => c.ticker).join(',');
  const response = await axios.get(`https://price.jup.ag/v6/price?ids=${ids}`);
  const data = response.data.data;
  items.value = includedCoins.map(coin => ({
    ...coin,
    price: data[coin.ticker].price
  }));
  dataLoaded.value = true;
});
</script>

<template>
  <div class="flex flex-col bg-white dark:bg-gray-950 h-screen">
    <NavBar />
    <div class="flex flex-grow justify-center items-center">
      <CoinsList class="h-[520px]" v-if="dataLoaded" :items="items" />
      <div v-else class="i-svg-spinners-eclipse-half text-emerald-700 dark:text-emerald-300 w-11 h-11"></div>
    </div>
  </div>
</template>