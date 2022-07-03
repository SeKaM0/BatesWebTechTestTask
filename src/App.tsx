import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import time from './api/timezoneAPI.json';
import event from './api/eventsAPI.json';
import './App.scss';
import { Header } from './components/header';
import { loadEvents, loadTimeZones } from './store/reducers/actions';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTimeZones(time.timezones));
    dispatch(loadEvents(event.events));
  }, []);

  return (
    <Header />
  );
};
