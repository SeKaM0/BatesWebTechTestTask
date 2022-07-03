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
}

export enum EventActionType {
  FETCH_EVENTS = 'FETCH_EVENTS',
  FETCH_TIMES = 'FETCH_TIMES',
}

interface FetchEventAction {
  type: EventActionType.FETCH_EVENTS,
  payload: Event[],
}

interface FetchTimeAction {
  type: EventActionType.FETCH_TIMES,
  payload: Time[],
}

export type ActionTypes = FetchEventAction | FetchTimeAction;
