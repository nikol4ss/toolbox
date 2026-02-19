<script setup lang="ts">
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Database } from "lucide-vue-next";
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton
        size="lg"
        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <div
          class="flex size-10 items-center justify-center bg-primary rounded-lg overflow-hidden min-w-8 min-h-8.25"
        >
          <Database class="size-5 object-contain shrink-0" />
        </div>

        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-medium">Toolbox</span>
          <span class="truncate text-xs">Gestão de Inventário</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
