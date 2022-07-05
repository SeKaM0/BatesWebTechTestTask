import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { setTimeZone } from '../store/reducers/actions';
import { Time } from '../types/events';
import logo from '../images/Earth.png';

export const Header: React.FC = () => {
  const { times, currentTimeZone } = useTypedSelector(state => state.event);
  const dispatch = useDispatch();

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
