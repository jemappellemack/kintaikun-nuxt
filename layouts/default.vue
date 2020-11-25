<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, SetupContext } from '@nuxtjs/composition-api'
import { useGlobalState, GlobalStateKey } from '@/compositions'

export default defineComponent({
  setup(props: any, { root }: SetupContext) {
    provide(GlobalStateKey, useGlobalState())
  }
})
</script>