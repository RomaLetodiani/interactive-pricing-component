<script setup>
import Button from './UI/Button.vue'
</script>

<template>
  <div class="max-w-[500px] w-full p-5 bg-white">
    <div>
      <div></div>
      <div class="relative flex justify-center items-center gap-5">
        <p>Monthly Billing</p>
        <div>o</div>
        <p>Yearly Billing</p>
        <span class="absolute right-0">25% Discount</span>
      </div>
    </div>
    <div class="flex justify-between items-center gap-5">
      <ul>
        <li>Unlimited Websites</li>
        <li>100% Data Ownership</li>
        <li>Email Reports</li>
      </ul>
      <Button :text="'Start My Trial'" />
    </div>
  </div>
</template>
