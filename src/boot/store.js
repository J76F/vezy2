import { defineBoot } from '#q-app/wrappers'
import { useCounterStore } from 'stores/example-store.js'

export default defineBoot(({ app }) => {
  // Allows to use this.$store inside Vue components.
  app.config.globalProperties.$store = useCounterStore()
})
