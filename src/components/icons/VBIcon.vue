<template>
    <span
      class="vb-icon"
      v-html="svg"
      role="img"
      :aria-label="label"
      :title="label"
    />
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { MDI, type MdiName } from './mdi'
  
  const props = withDefaults(
    defineProps<{
      name: MdiName
      label?: string
    }>(),
    {
      label: '',
    }
  )
  
  const svg = computed(() => MDI[props.name])
  </script>
  
  <style scoped>
  .vb-icon {
    width: 24px;
    height: 24px;
    display: inline-block;
    color: #2c2c2c;
  }
  
  /* VBIcon の中に入ってくる <svg> を確実に 24px & currentColor にする */
  .vb-icon :deep(svg) {
    width: 100%;
    height: 100%;
    display: block;
    fill: currentColor;
  }
  </style>
  