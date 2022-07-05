import React from 'react';
import { useAppSelector } from '../hooks/useTypedSelector';
import { Event } from '../types/events';

export const EventList: React.FC = () => {
  const { currentTimeZone, isPublished, events } = useAppSelector(state => state.eventReducer);

  return (
    <section className="page__section eventList">
      <div className="container">
        <div className="eventList__cards">
          {events.map((event:Event) => (isPublished === event.isPublished ? (
            <div className="card" key={event.id}>
              <h1 className="card__title">{event.title.length > 40 ? `${event.title.substring(0, 40)}...` : event.title}</h1>
              <div className="card__footer">
                <button type="button" className="button button__more">...</button>
                <span className="card__time">
                  {new Date(event.time).toLocaleString('en-US', {
                    timeZone: `${currentTimeZone}`,
                    year: 'numeric',
                    day: '2-digit',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ) : ''))}
        </div>
      </div>
    </section>
  );
};
