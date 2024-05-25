import { ref, onMounted, onUnmounted } from 'vue'

export function useMediaQuery(query: string) {
  const matches = ref(false)

  function updateMatches() {
    matches.value = window.matchMedia(query).matches
  }

  onMounted(() => {
    const mediaQueryList = window.matchMedia(query)
    updateMatches()

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', updateMatches)
    } else {
      // For older browsers
      mediaQueryList.addListener(updateMatches)
    }

    onUnmounted(() => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', updateMatches)
      } else {
        // For older browsers
        mediaQueryList.removeListener(updateMatches)
      }
    })
  })

  return matches
}
