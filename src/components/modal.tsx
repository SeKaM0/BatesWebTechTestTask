/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useAppDispatch } from '../hooks/useTypedSelector';
import { eventSlice } from '../store/reducers/eventSlice';

export const Modal: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { setOpenModal, setEventToEdit } = eventSlice.actions;

  return (
    <div
      className="modal"
      onClick={() => {
        dispatch(setEventToEdit(null));
        dispatch(setOpenModal(false));
      }}
    >
      <div
        className="modal__content"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
