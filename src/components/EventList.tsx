/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { Event } from '../types/events';
import edit from '../images/Edit.png';
import delet from '../images/Delete.png';
import publish from '../images/Publish.png';
import { eventSlice } from '../store/reducers/eventSlice';

export const EventList: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const {
    isPublished, events, currentTimeZone, openOption,
  } = useAppSelector(state => state.eventReducer);
  const {
    setOpenOption, deleteEvent, handlerPublish, setOpenModal, setEventToEdit,
  } = eventSlice.actions;

  const titleMaxLength = 35;

  dayjs.extend(utc);
  dayjs.extend(timezone);

  return (
    <section className="page__section eventList">
      <div className="container">
        <div className="eventList__cards">
          {events.map((event:Event) => (isPublished === event.isPublished ? (
            <div className="card__container">
              <div className="card" key={event.id}>
                <h1 className="card__title">{event.title.length > titleMaxLength ? `${event.title.substring(0, titleMaxLength)}...` : event.title}</h1>
                <div className="card__footer">
                  <button type="button" className="button button__more" onClick={() => dispatch(setOpenOption(event.id))}>...</button>
                  <span className="card__time">
                    {dayjs(event.time).tz(currentTimeZone).format('h:mm a - DD MMM YYYY')}
                  </span>
                </div>
              </div>
              <div
                className={classNames('card__option', {
                  optionActive: openOption === event.id,
                })}
              >
                <button
                  type="button"
                  className="button button__option"
                  onClick={() => {
                    dispatch(setOpenModal(true));
                    dispatch(setOpenOption(-1));
                    dispatch(setEventToEdit(event.id));
                  }}
                >
                  <img src={edit} alt="" className="card__option-icon" />
                  <span className="card__option-title">Edit</span>
                </button>
                <button
                  type="button"
                  className="button button__option"
                  onClick={() => {
                    dispatch(handlerPublish(event.id));
                    dispatch(setOpenOption(-1));
                  }}
                >
                  <img src={publish} alt="" className="card__option-icon" />
                  <span className="card__option-title">
                    {event.isPublished ? 'UnPublish' : 'Publish'}
                  </span>
                </button>
                <button
                  type="button"
                  className="button button__option button__delete"
                  onClick={() => {
                    dispatch(deleteEvent(event.id));
                    dispatch(setOpenOption(-1));
                  }}
                >
                  <img src={delet} alt="" className="card__option-icon" />
                  <span className="card__option-title">Delete</span>
                </button>
              </div>
            </div>
          ) : ''))}
        </div>
      </div>
    </section>
  );
});
