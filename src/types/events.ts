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
}

export enum EventActionType {
  FETCH_EVENTS = 'FETCH_EVENTS',
  FETCH_TIMES = 'FETCH_TIMES',
  SET_TIME_ZONE = 'SET_TIME_ZONE',
  SET_IS_PUBLISHED = 'SET_IS_PUBLISHED',
  SET_OPEN_MODAL = 'SET_OPEN_MODAL',
  ADD_EVENT = 'ADD_EVENT',
}

interface FetchEventAction {
  type: EventActionType.FETCH_EVENTS,
  payload: Event[],
}

interface FetchTimeAction {
  type: EventActionType.FETCH_TIMES,
  payload: Time[],
}

interface SetTimeZone {
  type: EventActionType.SET_TIME_ZONE,
  payload: string,
}

interface SetIsPublished {
  type: EventActionType.SET_IS_PUBLISHED,
  payload: boolean,
}

interface SetOpenModal {
  type: EventActionType.SET_OPEN_MODAL,
  payload: boolean,
}
interface AddEvent {
  type: EventActionType.ADD_EVENT,
  payload: Event,
}

export type ActionTypes =
FetchEventAction
| FetchTimeAction
| SetTimeZone
| SetIsPublished
| SetOpenModal
| AddEvent;
