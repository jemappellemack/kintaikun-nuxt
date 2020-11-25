<template>
  <div>{{ state.clock }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, reactive } from '@nuxtjs/composition-api'
import format from 'date-fns/format'

export default defineComponent({
  setup() {
    let intervalId = 0

    const state = reactive({
     clock: format(new Date(), 'H:mm:ss')
    })

    const setClock = (date: Date) : void => {
      state.clock = format(date, 'H:mm:ss')
    }

    const startClock = () :void => {
      intervalId = setInterval(() => { setClock(new Date()), 1000 })
    }

    onMounted(() => {
      startClock()
    })

    onUnmounted(() => {
      clearInterval(intervalId)
    })

    return { state }
  }
})
</script>
