export interface IState {
  kintaiCalendarState: IKintaiCalendarState,
  targetCalendarMonthState: Date
}

export interface IKintaiCalendar {
  date: Date,
  dateString: string;
  year: string;
  month: string;
  day: string;
  week: string;
  startString: string;
  endString: string;
  status: string;
  startAt: Date | null;
  endAt: Date | null;
  duration: Duration;
}

export interface IKintaiCalendarState {
  [key: string]: IKintaiCalendar
}

export interface ICalendar {
  date:Date;
  year:string;
  month:string;
  day:string;
  week:string;
  dateString:string;
} 
