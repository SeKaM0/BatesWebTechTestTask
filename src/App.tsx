import React, { useEffect } from 'react';
import time from './api/timezoneAPI.json';
import event from './api/eventsAPI.json';
import { Header } from './components/Header';
import { ControlPanel } from './components/ControlPanel';
import { EventList } from './components/EventList';
import { Modal } from './components/modal';
import { useAppDispatch, useAppSelector } from './hooks/useTypedSelector';
import { eventSlice } from './store/reducers/eventSlice';

export const App: React.FC = () => {
  const { openModal } = useAppSelector(state => state.eventReducer);
  const { loadTimeZones, loadEvents } = eventSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTimeZones(time.timezones));
    dispatch(loadEvents(event.events));
  }, []);

  return (
    <>
      <Header />
      <ControlPanel />
      <EventList />
      {openModal && <Modal />}
    </>
  );
};
