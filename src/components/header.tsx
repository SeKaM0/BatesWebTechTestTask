import React from 'react';
import { Time } from '../types/events';
import logo from '../images/Earth.png';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { eventSlice } from '../store/reducers/eventSlice';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentTimeZone, times } = useAppSelector(state => state.eventReducer);
  const { setTimeZone } = eventSlice.actions;

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h1 className="header__logo">
            Event Manager
          </h1>
          <div className="timezone">
            <div className="timezone__content">
              <img src={logo} alt="Earth" className="timezone__content-logo" />
              <h4 className="timezone__content-title">Select Timezone</h4>
            </div>
            <select
              className="timezone__select"
              value={currentTimeZone}
              onChange={(event) => {
                dispatch(setTimeZone(event.target.value));
              }}
            >
              {times.map((elem:Time) => (
                <option key={elem.id} value={elem.value}>
                  {elem.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
