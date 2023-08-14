<script setup lang="ts">
import { Tab } from '../types';

defineProps<{
  tabs: Tab[];
  activeTab: string;
}>();

const emits = defineEmits<{
  (e: 'on-tab-change', tabId: string): void;
}>();
</script>

<template>
  <div class="flex space-x-4">
    <a
      class="bg-movie-black-200 rounded-lg text-white px-4 py-2 drop-shadow hover:bg-oranje cursor-pointer"
      :class="activeTab === id ? 'bg-oranje' : 'bg-movie-black-200'"
      v-for="{ title, emoji, id } in tabs"
      :key="id"
      @click="emits('on-tab-change', id)"
    >
      {{ emoji }}
      {{ title }}
    </a>
  </div>
</template>
