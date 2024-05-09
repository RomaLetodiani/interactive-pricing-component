<script setup lang="ts">
import { defineProps } from 'vue'

// Define props using defineProps() function
const props = defineProps({
  text: String,
})
</script>

<template>
  <button class="bg-[hsl(227,35%,25%)] text-white rounded-full px-10 py-2">{{ props.text }}</button>
</template>
