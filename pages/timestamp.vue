<template>
  <div>
    <Navigation/>
    <div class="container">
      <div class="columns mt-5">
        <div class="column has-text-left"></div>
        <div class="column has-text-centered">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p class="subtitle mt-4">{{ todayJp }}</p>
                <p class="title mt-4"><Clock/></p>
                <br>
                <p class="mt-4" data-cy="startTime">出 勤 {{ startAt }}</p>
                <p class="mt-4" data-cy="endTime">退 勤 {{ endAt }}</p>
                <p class="mt-4" data-cy="workingTime">時 間 {{ workingTime }}</p>
                <br>
                <div class="field">
                  <div class="control mt-4">
                    <button class="button is-link" v-bind:disabled="disabledStartAtButton" @click="onClickStartTime" data-cy="onClickStartTime">出　勤</button>
                  </div>
                  <div class="control mt-4 mb-4">
                    <button class="button is-link is-light" v-bind:disabled="disabledEndAtButton" @click="onClickEndTime" data-cy="onClickEndTime">退　勤</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column has-text-right"></div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, inject } from '@nuxtjs/composition-api'
import { GlobalStateKey } from '@/compositions'
import format from 'date-fns/format'
import intervalToDuration from 'date-fns/intervalToDuration'

export default defineComponent({
  setup() {
    const today: string = format(new Date(), 'yyyy-MM-dd')
    const todayJp: string = format(new Date(), 'y年M月dd日')

    const state = inject(GlobalStateKey)
    if (!state) {
      throw new Error(`${GlobalStateKey} is not provided`)
    }

    const onClickStartTime = () : void => {
      const obj = state.getKintaiCalendarState(today)
      const currentDate = new Date()
      obj.startAt = currentDate
      obj.startString = format(currentDate, 'H:mm')
      state.setKintaiCalendarState(today, obj)
    }

    const onClickEndTime = () : void => {
      const obj = state.getKintaiCalendarState(today)
      const currentDate = new Date()
      obj.endAt = currentDate
      obj.endString = format(currentDate, 'H:mm')
      if (obj.startAt && obj.endAt) {
        obj.duration = intervalToDuration({ start: obj.startAt, end: obj.endAt })
      }
      state.setKintaiCalendarState(today, obj)
    }

    const startAt = computed(() => {
      const obj = state.getKintaiCalendarState(today)
      return obj.startAt ? format(obj.startAt, 'H:mm') : null
    })

    const endAt = computed(() => {
      const obj = state.getKintaiCalendarState(today)
      return obj.endAt ? format(obj.endAt, 'H:mm') : null
    })

    const workingTime = computed(() => {
      const obj = state.getKintaiCalendarState(today)
      return obj.duration ? `${obj.duration.hours}:${obj.duration.minutes?.toString().padStart(2,'0')}` : null
    })

    const disabledStartAtButton = computed(() => {
      const obj = state.getKintaiCalendarState(today)
      return obj.startAt ? true : false
    })

    const disabledEndAtButton = computed(() => {
      const obj = state.getKintaiCalendarState(today)
      return ( obj.startAt ? false : true ) || ( obj.endAt ? true : false )
    })
    
    return {
      state, todayJp, onClickStartTime, onClickEndTime,
      startAt, endAt, workingTime, 
      disabledStartAtButton, disabledEndAtButton 
    }
  }
})
</script>