<script setup>
import circlesUrl from '../assets/images/pattern-circles.svg'
</script>

<template>
  <div class="relative text-center">
    <img
      class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      :src="circlesUrl"
      alt="Circles"
    />
    <span class="z-20 relative">
      <h1 class="font-bold text-[clamp(18px,4vw,32px)]">Simple, Traffic-Based Pricing</h1>
      <p class="text-[clamp(11px,2.5vw,15px)] text-[hsl(225,20%,60%)]">
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </span>
  </div>
</template>
