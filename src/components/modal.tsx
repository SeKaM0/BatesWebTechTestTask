/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
// import classNames from 'classnames';
import { TextField } from '@mui/material';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { eventSlice } from '../store/reducers/eventSlice';

export const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { events } = useAppSelector(state => state.eventReducer);
  const { setOpenModal, addEvent } = eventSlice.actions;

  const validationSchema = yup.object().shape({
    title: yup.string().required('It`s required field').max(60, 'Not more than 60'),
  });

  interface Values {
    title: string,
    time: string,
  }
  const initialValues: Values = {
    title: '',
    time: '',
  };

  return (
    <div className="modal" onClick={() => dispatch(setOpenModal(false))}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <h1>Add Event</h1>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          validationSchema={validationSchema}
          onSubmit={(values, action) => {
            dispatch(addEvent({
              ...values,
              id: events[events.length - 1].id + 1,
              isPublished: false,
            }));

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
                id="outlined-basic"
                label={errors.title && touched.title ? 'Error' : 'Input Event'}
                variant="outlined"
                value={values.title}
                onChange={(e) => setFieldValue('title', e.target.value)}
                onBlur={handleBlur}
                helperText={errors.title && touched.title ? errors.title : ''}
              />
              <Form.Control
                type="datetime-local"
                min="2020-06-07T00:00"
                value={values.time}
                onChange={(e) => {
                  setFieldValue('time', e.target.value);
                  console.log(e.target.value);
                }}
                className="addTodos-input"
              />
              <button
                type="submit"
                className="button form__button"

              >
                Add Event
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
