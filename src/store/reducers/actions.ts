import { EventActionType, Time, Event } from '../../types/events';

export const loadTimeZones = (timeZones:Time[]) => {
  return {
    type: EventActionType.FETCH_TIMES,
    payload: timeZones,
  };
};

export const loadEvents = (events: Event[]) => {
  return {
    type: EventActionType.FETCH_EVENTS,
    payload: events,
  };
};

export const setTimeZone = (timeZone:string) => {
  return {
    type: EventActionType.SET_TIME_ZONE,
    payload: timeZone,
  };
};

export const setIsPublished = (isPublished: boolean) => {
  return {
    type: EventActionType.SET_IS_PUBLISHED,
    payload: isPublished,
  };
};

export const setOpenModal = (openModal: boolean) => {
  return {
    type: EventActionType.SET_OPEN_MODAL,
    payload: openModal,
  };
};

export const addEvent = (event: Event) => {
  return {
    type: EventActionType.ADD_EVENT,
    payload: event,
  };
};
