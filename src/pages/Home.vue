<script setup lang="ts">
import Page from '../components/layout/Page.vue';
import { tabsMock } from '../mocks/tabs';
import Tabs from '../components/Tabs.vue';
import MainBanner from '../components/MainBanner.vue';
import FlashNews from '../components/FlashNews.vue';
import { ref } from 'vue';
import ContentRow from '../components/ContentRow.vue';

const activeTab = ref<string>(tabsMock[0].id);

const onTabChange = (tabId: string) => {
  activeTab.value = tabId;
};
</script>

<template>
  <page>
    <template #title> Home </template>
    <div>
      <tabs
        :tabs="tabsMock"
        :active-tab="activeTab"
        @onTabChange="onTabChange"
      />
    </div>
    <div>
      <content-row>
        <main-banner />
        <flash-news />
      </content-row>
    </div>
  </page>
</template>
