import { ActionTypes, EventActionType, EventState } from '../../types/events';

const initialState: EventState = {
  times: [],
  events: [],
  currentTimeZone: 'UTC',
  isPublished: true,
  openModal: false,
};

export const eventReducer = (state = initialState, action: ActionTypes): EventState => {
  switch (action.type) {
    case EventActionType.FETCH_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case EventActionType.FETCH_TIMES:
      return {
        ...state,
        times: action.payload,
      };
    case EventActionType.SET_TIME_ZONE:
      return {
        ...state,
        currentTimeZone: action.payload,
      };
    case EventActionType.SET_IS_PUBLISHED:
      return {
        ...state,
        isPublished: action.payload,
      };
    case EventActionType.SET_OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload,
      };

    case EventActionType.ADD_EVENT:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload,
        ],
      };

    default:
      return state;
  }
};
