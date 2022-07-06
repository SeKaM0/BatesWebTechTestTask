/* eslint-disable no-shadow */
export interface Event {
  id: number,
  title: string,
  time: string,
  isPublished: boolean,
}
export interface Time {
  id: number,
  name: string,
  value: string,
  offset: string,
}

export interface EventState {
  times: Time[];
  events: Event[];
  currentTimeZone: string,
  isPublished: boolean,
  openModal: boolean,
  openOption: number,
  eventToEdit: null | number,
}

export interface ToEditValue {
  title: string,
  time: string,
}
