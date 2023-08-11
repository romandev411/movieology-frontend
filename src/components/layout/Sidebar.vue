<script setup lang="ts">
import {
  HomeIcon,
  FilmIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline';
import {
  HomeIcon as HomeIconSolid,
  FilmIcon as FilmIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
} from '@heroicons/vue/24/solid';
import { useRoute } from 'vue-router';

const menu = [
  {
    to: '/',
    icon: HomeIcon,
    activeIcon: HomeIconSolid,
  },
  {
    to: '/search',
    icon: MagnifyingGlassIcon,
    activeIcon: MagnifyingGlassIconSolid,
  },
  {
    to: '/movies/1',
    icon: FilmIcon,
    activeIcon: FilmIconSolid,
  },
];

const route = useRoute();
</script>

<template>
  <nav class="block bg-movie-black-200">
    <div class="relative w-30 flex-col p-10 space-y-3">
      <router-link
        v-for="{ to, icon, activeIcon } in menu"
        :to="to"
        :key="to"
        :class="
          route.path === to ? ' bg-movie-black-400 text-white' : ' text-grey'
        "
        class="flex-shrink-0 flex w-14 h-14 items-center justify-center rounded-lg"
      >
        <component
          :is="route.path === to ? activeIcon : icon"
          class="w-6 h-6"
        ></component>
      </router-link>
    </div>
  </nav>
</template>
