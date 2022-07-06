/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Event, EventState, Time, ToEditValue,
} from '../../types/events';

const initialState: EventState = {
  events: [],
  currentTimeZone: 'UTC',
  isPublished: true,
  openModal: false,
  times: [],
  openOption: -1,
  eventToEdit: null,
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    loadTimeZones(state, action: PayloadAction<Time[]>) {
      state.times = action.payload;
    },

    loadEvents(state, action: PayloadAction<Event[]>) {
      state.events = action.payload;
    },

    setTimeZone(state, action: PayloadAction<string>) {
      state.currentTimeZone = action.payload;
    },

    setIsPublished(state, action: PayloadAction<boolean>) {
      state.isPublished = action.payload;
    },

    setOpenModal(state, action: PayloadAction<boolean>) {
      state.openModal = action.payload;
    },

    addEvent(state, action: PayloadAction<Event>) {
      state.events = [...state.events, action.payload];
    },

    setOpenOption(state, action: PayloadAction<number>) {
      if (state.openOption === action.payload) {
        state.openOption = -1;
      } else {
        state.openOption = action.payload;
      }
    },

    deleteEvent(state, action: PayloadAction<number>) {
      state.events = state.events.filter(event => event.id !== action.payload);
    },

    handlerPublish(state, action: PayloadAction<number>) {
      state.events = state.events.map(event => {
        if (event.id === action.payload) {
          return {
            ...event,
            isPublished: !event.isPublished,
          };
        }

        return {
          ...event,
        };
      });
    },

    setEventToEdit(state, action: PayloadAction<number | null>) {
      state.eventToEdit = action.payload;
    },

    editEvent(state, action: PayloadAction<ToEditValue>) {
      state.events = state.events.map(event => {
        if (event.id === state.eventToEdit) {
          return {
            ...event,
            title: action.payload.title,
            time: action.payload.time,
          };
        }

        return {
          ...event,
        };
      });
    },
  },
});

export default eventSlice.reducer;
