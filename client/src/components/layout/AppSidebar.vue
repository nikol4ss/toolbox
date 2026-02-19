<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar';

import NavMain from '@/components/layout/NavMain.vue';
import { LayoutPanelLeft, NotepadText, Package, ShoppingCart } from 'lucide-vue-next';

import TeamSwitcher from '@/components/layout/TeamSwitcher.vue';

import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar';

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
});

const data = {
  navMain: [
    {
      title: 'Painel',
      url: '/panel',
      icon: LayoutPanelLeft,
      isActive: true,
    },
    {
      title: 'Relatório',
      url: '/report',
      icon: NotepadText,
    },
    {
      title: 'Inventário',
      url: '/inventory',
      icon: Package,
    },
    {
      title: 'Requisições',
      url: '/requests',
      icon: ShoppingCart,
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
    </SidebarContent>
  </Sidebar>
</template>
