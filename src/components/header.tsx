import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Time } from '../types/events';

export const Header: React.FC = () => {
  const { times } = useTypedSelector(state => state.event);

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">
          Event Manager
          {' '}
        </h1>
        <div className="header__timezone">
          <div className="timezone__title">

          </div>
          <select className="timezone__select">
            {times.map((elem:Time) => (
              <option key={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>
        </div>
      </div>

    </header>
  );
};
