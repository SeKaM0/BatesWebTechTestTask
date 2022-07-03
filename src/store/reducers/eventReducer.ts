import { ActionTypes, EventActionType, EventState } from '../../types/events';

const initialState: EventState = {
  times: [],
  events: [],
};

export const eventReducer = (state = initialState, action: ActionTypes): EventState => {
  switch (action.type) {
    case EventActionType.FETCH_EVENTS:
      return {
        times: [],
        events: action.payload,
      };
    case EventActionType.FETCH_TIMES:
      return {
        events: [],
        times: action.payload,
      };
    default:
      return state;
  }
};
