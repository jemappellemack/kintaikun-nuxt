import { toRefs, InjectionKey, reactive } from '@nuxtjs/composition-api'
import { IState, IKintaiCalendarState, IKintaiCalendar, IKintaiApplyModalState } from '~/interfaces'
import format from 'date-fns/format';
import startOfMonth from 'date-fns/startOfMonth'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfMonth from 'date-fns/endOfMonth'
import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths'

const createCalender = (currentDate: Date) => {
  const start = new Date(startOfMonth(subMonths(currentDate, 1)))
  const end = new Date(endOfMonth(addMonths(currentDate, 1)))
  const dateArray: IKintaiCalendar[] = eachDayOfInterval({ start, end }).map(date => {
    return {
      date,
      dateString: format(date,'yyyy-MM-dd'),
      year: format(date, 'yyyy'),
      month: format(date, 'MM'),
      day: format(date, 'dd'),
      week: format(date, 'EEEEEE'),
      startString:'',
      endString: '',
      status: '',
      startAt: null,
      endAt: null,
      duration: {
        days: 0,
        hours: 0,
        minutes: 0,
        months: 0,
        seconds: 0,
        years: 0
      }
    }
  })
  return dateArray
}

const convertArrayToObject = ( arr:IKintaiCalendar[] ): IKintaiCalendarState => {
  const obj = arr.reduce((result:any, current) => {
    result[current.dateString] = current
    return result
  }, {})
  return obj
}

export const useGlobalState = () => {
  const dateArray = createCalender(new Date())
  const dateObj = convertArrayToObject(dateArray)

  const globalState = reactive<IState>({
    kintaiCalendarState: dateObj,
    targetCalendarMonthState: new Date(),
    kintaiApplyModalState: {
      showModal: false,
      dateString: ''
    }
  })

  const setKintaiCalendarState = ( dateString: string, stateValue: IKintaiCalendar ) => {
    globalState.kintaiCalendarState[dateString] = stateValue
  }

  const getKintaiCalendarState = ( dateString: string ) => {
   return globalState.kintaiCalendarState[dateString];
  }

  const setTargetCalendarMonthState = ( stateValue: Date ) => {
    globalState.targetCalendarMonthState = stateValue
  }

  const getTargetCalendarMonthState = () => {
   return globalState.targetCalendarMonthState;
  }

  const setKintaiApplyModalState = ( stateValue: IKintaiApplyModalState ) => {
    globalState.kintaiApplyModalState = stateValue
  }

  const getKintaiApplyModalState = () => {
   return globalState.kintaiApplyModalState;
  }

  return {
    ...toRefs(globalState),
    getKintaiCalendarState,
    setKintaiCalendarState,
    setTargetCalendarMonthState,
    getTargetCalendarMonthState,
    setKintaiApplyModalState,
    getKintaiApplyModalState
  }
}

type GlobalStateType = ReturnType<typeof useGlobalState>
export const GlobalStateKey: InjectionKey<GlobalStateType> = Symbol(
  'GlobalState'
)
