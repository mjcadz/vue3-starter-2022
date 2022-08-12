<script setup lang="ts">
  import { defineAsyncComponent, watch, shallowRef } from 'vue'
  import { useRoute } from 'vue-router'
  import DefaultLayout from './DefaultLayout.vue'

  const layout = shallowRef()
  const route = useRoute()

  const layouts = import.meta.glob('./*Layout.vue')

  watch(
    () => route.meta.layout as string | undefined,
    (metaLayout) => {
      if (metaLayout) {
        layout.value = defineAsyncComponent(layouts[`./${metaLayout}.vue`])
        return
      }
      layout.value = DefaultLayout
    },
    { immediate: true }
  )
</script>

<template>
  <component :is="layout" />
</template>
