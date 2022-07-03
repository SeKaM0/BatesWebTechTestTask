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
