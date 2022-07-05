import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import time from './api/timezoneAPI.json';
import event from './api/eventsAPI.json';
import { Header } from './components/Header';
import { loadEvents, loadTimeZones } from './store/reducers/actions';
import { ControlPanel } from './components/ControlPanel';
import { EventList } from './components/EventList';
import { Modal } from './components/modal';
import { useTypedSelector } from './hooks/useTypedSelector';

export const App: React.FC = () => {
  const { openModal } = useTypedSelector(state => state.event);
  const dispatch = useDispatch();

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
