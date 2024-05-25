<script setup>
import Button from './UI/Button.vue'
import { ref, computed } from 'vue'
import { useMediaQuery } from '../composable/useMediaQuery'
import checkIcon from '../assets/images/icon-check.svg'

const isMobile = useMediaQuery('(max-width: 767px)')
const liTexts = ['Unlimited Websites', '100% Data Ownership', 'Email Reports']
const isYearlyBilling = ref(false)
const sliderValue = ref(10)

// Compute the price based on the slider value and billing cycle
const price = computed(() => {
  const basePrice = sliderValue.value
  console.log('🚀 ~ price ~ basePrice:', basePrice)
  return isYearlyBilling.value ? (basePrice * 0.75).toFixed(2) : basePrice.toFixed(2)
})
</script>
<template>
  <div class="max-w-[500px] w-full bg-white rounded-lg shadow-xl">
    <div class="p-8">
      <div class="flex flex-col justify-center items-center md:items-stretch">
        <div class="flex justify-between items-center gap-8">
          <p class="tracking-widest font-bold text-[hsl(225,20%,60%)]">100K PAGEVIEWS</p>
          <h1
            :class="[
              isMobile ? 'hidden' : 'block',
              'font-bold flex items-center gap-3 text-[clamp(18px,4vw,32px)]',
            ]"
          >
            <span class="w-3ch">${{ price }}</span>
            <span class="text-[hsl(225,20%,60%)] text-lg">/Month</span>
          </h1>
        </div>
        <input type="range" min="10" max="20" step="1" v-model="sliderValue" class="w-full my-5" />
        <h1
          :class="[
            isMobile ? 'block' : 'hidden',
            'font-bold mb-3 flex items-center gap-3 text-[clamp(18px,4vw,32px)]',
          ]"
        >
          <span class="w-3ch">${{ price }}</span>
          <span class="text-[hsl(225,20%,60%)] text-lg">/Month</span>
        </h1>
      </div>
      <div class="relative flex justify-center items-center text-xs md:text-sm gap-5">
        <p>Monthly Billing</p>
        <div class="relative flex items-center">
          <input
            type="checkbox"
            v-model="isYearlyBilling"
            class="toggle-checkbox"
            id="billingToggle"
          />
          <label for="billingToggle" class="toggle-switch"></label>
        </div>
        <p>Yearly Billing</p>
        <span
          class="absolute font-bold -right-5 flex justify-center items-center text-[10px] bg-[#feece7] text-[#ff8c66] border px-[5px] rounded-full"
          >{{ isMobile ? '-25%' : '25% Discount' }}</span
        >
      </div>
    </div>
    <div class="flex md:flex-row flex-col justify-between items-center gap-5 p-8 border-t">
      <ul class="text-xs flex flex-col gap-3">
        <li class="flex gap-2 items-center" v-for="liText in liTexts" :key="liText">
          <img :src="checkIcon" alt="checkbox" />{{ liText }}
        </li>
      </ul>
      <Button :text="'Start My Trial'" />
    </div>
  </div>
</template>

<style scoped>
.toggle-checkbox {
  display: none;
}

.toggle-switch {
  width: 40px;
  height: 20px;
  background-color: hsl(223, 50%, 87%);
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.toggle-switch::before {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: #fff;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: all 0.3s ease-in-out;
}

.toggle-checkbox:hover + .toggle-switch {
  background-color: hsl(174, 77%, 80%);
  transform: scale(1.1);
}

.toggle-checkbox:checked + .toggle-switch::before {
  transform: translateX(20px);
}
</style>
