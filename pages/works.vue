<template>
  <div>
    <Navigation/>
    <div class="container">
      <div class="columns mt-5">
        <div class="column has-text-right">
          <button class="button is-primary" @click="downloadAsExcelFile">ダウンロード</button>
          </div>
      </div>
      <div class="columns mt-5">
        <div class="column has-text-left">
          <button class="button is-link" v-if="showBackButton" @click="goBackMonth" block>前月へ</button>
        </div>
        <div class="column has-text-centered">
          <h4>{{ yearMonth }}</h4>
        </div>
        <div class="column has-text-right">
          <button class="button is-link" v-if="showNextButton" @click="goNextMonth" block>翌月へ</button>
        </div>
      </div>
      <div class="mt-6 mb-6">
          <table class="table is-bordered is-fullwidth has-text-centered" id="kintaitable">
            <thead>
              <tr>
                <th>
                  {{ yearMonth }}
                </th>
                <th>勤務区分</th>
                <th>出勤時刻</th>
                <th>退勤時刻</th>
                <th>稼働時間</th>
                <th>休憩時間</th>
                <th>承認申請</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="date in calendars" v-bind:key=date.dateString>
                <td>
                  <p v-bind:style="{ color: (date.week === 'Sa' ? 'blue': '') || (date.week === 'Su' ? 'red': '') }">{{ date.day }}</p>
                  <p v-bind:style="{ color: (date.week === 'Sa' ? 'blue': '') || (date.week === 'Su' ? 'red': '') }">{{ date.week }}</p>
                </td>
                <td>
                  <p v-bind:style="{ color: (date.week === 'Sa' ? 'blue': '') || (date.week === 'Su' ? 'red': '') }">{{ (date.week === 'Sa' || date.week === 'Su') ?　'休日'　: '稼働' }}</p>
                </td>
                <td>
                  <span>{{ startTime(date.dateString) }}</span>
                </td>
                <td>
                  <span>{{ endTime(date.dateString) }}</span>
                </td>
                <td>
                  <span>{{ workingTime(date.dateString) }}</span>
                </td>
                <td>
                  {{ date.week === 'Sa' || date.week === 'Su' ? '0:00' : '1:00' }}
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from '@nuxtjs/composition-api'
import { GlobalStateKey } from '@/compositions'
import { ICalendar } from '~/interfaces'
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import format from 'date-fns/format'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths'
import KintaiApplyModal from '~/components/KintaiApplyModal.vue'

export default defineComponent({
  components: { KintaiApplyModal },
  setup() {
    const today: string = format(new Date(), 'yyyy-MM-dd')
 
    const state = inject(GlobalStateKey)
    if (!state) {
      throw new Error(`${GlobalStateKey} is not provided`)
    }

    const fetchCalendar = (currentDate: Date) : ICalendar [] => {
      const start = startOfMonth(currentDate)
      const end = endOfMonth(currentDate)
      const dates = eachDayOfInterval({ start, end })
      const dateArray = dates.map(date => {
        return {
          date,
          year: format(date, 'yyyy'),
          month: format(date, 'MM'),
          day: format(date, 'dd'),
          week: format(date, 'EEEEEE'),
          dateString: format(date,'yyyy-MM-dd'),
        }
      })
      return dateArray
    }

    const downloadAsExcelFile = () => {
      const tableName = 'kintaitable'
      const tableElement = document.getElementById(tableName)
      const wb = XLSX.utils.table_to_book(tableElement)
      const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' })
      const buf = new ArrayBuffer(wbout.length)
      const view = new Uint8Array(buf)
      for (let i = 0; i !== wbout.length; ++i) {
        view[i] = wbout.charCodeAt(i) & 0xFF
      }
      const currentDate = state.getTargetCalendarMonthState()
      const fileName = format(currentDate, 'y年M月度勤怠')
      saveAs(new Blob([buf], { type: 'application/octet-stream' }), `${fileName}.xlsx`)
    }
  
    const goBackMonth = () => {
      const currentDate = state.getTargetCalendarMonthState()
      state.setTargetCalendarMonthState(subMonths(currentDate, 1))
    }

    const goNextMonth = () => {
      const currentDate = state.getTargetCalendarMonthState()
      state.setTargetCalendarMonthState(addMonths(currentDate, 1))
    }

    const startTime = (targetDate:string) => {
      const obj = state.getKintaiCalendarState(targetDate)
      return obj.startString ? obj.startString : null
    }

    const endTime = (targetDate:string) => {
      const obj = state.getKintaiCalendarState(targetDate)
      return obj.endString ? obj.endString : null
    }

    const workingTime = (targetDate:string) => {
      const obj = state.getKintaiCalendarState(targetDate)
      return obj.duration ? `${obj.duration.hours}:${obj.duration.minutes?.toString().padStart(2,'0')}` : null
    }

    let showKintaiApplyModal = false;
    const openKintaiApplyModal = (dateString: string) => {
      showKintaiApplyModal = true;
      console.log(showKintaiApplyModal,dateString);
    }

    const calendars = computed(() => {
      const targetDate = state.getTargetCalendarMonthState()
      return fetchCalendar(targetDate)
    })

    const yearMonth = computed(() => {
      return format(state.getTargetCalendarMonthState(), 'y年M月度')
    })
    
    const showBackButton = computed(() => {
      const targetDate = state.getTargetCalendarMonthState()
      const difference = differenceInCalendarMonths(targetDate, new Date());
      return (difference < 0) ? false : true
    })

    const showNextButton = computed(() => {
      const targetDate = state.getTargetCalendarMonthState()
      const difference = differenceInCalendarMonths(targetDate, new Date());
      return (difference > 0) ? false : true
    })

    const showKintaiApplyModalButton = (dateString: string) => {
      const obj = state.getKintaiCalendarState(dateString)
      console.log(obj)
      return obj.status ? true : false
    }

   return {
      state, yearMonth, goBackMonth, goNextMonth,
      calendars, startTime, endTime, workingTime,
      showBackButton, showNextButton, downloadAsExcelFile
    }
  }
})
</script>
