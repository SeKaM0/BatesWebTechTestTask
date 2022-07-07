/* eslint-disable no-console */
import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { TextField } from '@mui/material';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { eventSlice } from '../store/reducers/eventSlice';
import { Modal } from './modal';

export const EditEvent:React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { events, eventToEdit } = useAppSelector(state => state.eventReducer);
  const { setOpenModal, editEvent, setEventToEdit } = eventSlice.actions;

  const eventToChange = events.find(event => event.id === eventToEdit);

  const validationSchema = yup.object().shape({
    title: yup.string().required('It`s required field').max(90, 'Not more than 90')
      .test('test',
        'This title is already used',
        (s) => !events.some(elem => elem.title === s?.toString())),
    time: yup.string().required('It`s required field'),
  });

  interface Values {
    title: string,
    time: string,
  }
  const initialValues: Values = {
    title: eventToChange ? eventToChange.title : '',
    time: eventToChange ? eventToChange.time : '',
  };

  return (
    <Modal>
      <h1>Edit Event</h1>
      <Formik
        initialValues={initialValues}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={(values, action: { resetForm: () => void; }) => {
          dispatch(editEvent({
            ...values,
          }));
          dispatch(setEventToEdit(null));
          dispatch(setOpenModal(false));
          action.resetForm();
        }}
      >
        {({
          values, errors, touched, setFieldValue, handleBlur, handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="form">
            <TextField
              error={!!(errors.title && touched.title)}
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
              label={errors.title && touched.title ? 'Error' : 'Event Title'}
              variant="outlined"
              value={values.title}
              onChange={(e) => {
                setFieldValue('title', e.target.value);
              }}
              onBlur={handleBlur}
              helperText={errors.title && touched.title ? errors.title : ''}
            />
            <input
              className={classNames('form__datePicker', {
                fieldError: errors.time && touched.time,
              })}
              type="datetime-local"
              min="2020-06-07T00:00"
              value={values.time}
              onChange={(e) => {
                setFieldValue('time', e.target.value);
              }}
            />
            {errors.time && touched.time ? <span>asdasd</span> : ''}
            <button
              type="submit"
              className="button button__add button__form"
            >
              Edit Event
            </button>
          </form>
        )}
      </Formik>

    </Modal>
  );
});
