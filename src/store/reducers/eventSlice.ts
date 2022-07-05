/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event, EventState, Time } from '../../types/events';

const initialState: EventState = {
  events: [],
  currentTimeZone: 'UTC',
  isPublished: true,
  openModal: false,
  times: [],
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
  },
});

export default eventSlice.reducer;
