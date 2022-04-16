<script setup lang="ts">
  import { defineAsyncComponent, watch, shallowRef } from 'vue'
  import { useRoute } from 'vue-router'
  import DefaultLayout from './DefaultLayout.vue'

  const layout = shallowRef()
  const route = useRoute()

  watch(
    () => route.meta.layout as string | undefined,
    (metaLayout) => {
      if (metaLayout !== undefined) {
        layout.value = defineAsyncComponent(
          () => import(/* @vite-ignore */ `./${metaLayout}.vue`)
        )
      } else {
        layout.value = DefaultLayout
      }
    },
    { immediate: true }
  )
</script>

<template>
  <component :is="layout">
    <slot />
  </component>
</template>
