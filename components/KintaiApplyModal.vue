<template>
  <div class="modal" v-bind:class="{ 'is-active': showModal }">
    <div class="modal-background" @click="emitClose"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">承認申請</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <h4>承認申請しますか？</h4>
        <p>{{ dateString }}</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="emitClose">キャンセル</button>
        <button class="button is-success" @click="emitSave">申請する</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, SetupContext } from '@nuxtjs/composition-api'
import { GlobalStateKey } from '@/compositions'

type Props = {
  showModal: boolean;
  dateString: string;
};

export default defineComponent({
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    dateString: {
      type: String,
      default: ''
    }
  },
  setup(props: Props, context: SetupContext) {
    const state = inject(GlobalStateKey)
    if (!state) {
      throw new Error(`${GlobalStateKey} is not provided`)
    }

    const emitSave = () => {
      const obj = state.getKintaiCalendarState(props.dateString)
      obj.status = 'applying'
      state.setKintaiCalendarState(obj.dateString, obj)
      context.emit('close')
    };

    const emitClose = () => {
      context.emit('close')
    };

    return { state, emitSave, emitClose }
  }
})
</script>
