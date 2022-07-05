import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { setIsPublished, setOpenModal } from '../store/reducers/actions';

export const ControlPanel:React.FC = () => {
  const { isPublished } = useTypedSelector(state => state.event);
  const dispatch = useDispatch();

  return (
    <section className="page__section controlPanel">
      <div className="container">
        <div className="controlPanel__content">
          <div className="controlPanel__filter">
            <button
              type="button"
              onClick={() => dispatch(setIsPublished(true))}
              className={classNames('button', 'button__filter', {
                isActive: isPublished === true,
              })}
            >
              Published
            </button>
            <button
              type="button"
              onClick={() => dispatch(setIsPublished(false))}
              className={classNames('button', 'button__filter', {
                isActive: isPublished === false,
              })}
            >
              UnPublished
            </button>
          </div>
          <div className="controlPanel__add">
            <button type="button" className="button button__add" onClick={() => dispatch(setOpenModal(true))}>
              <span className="button__icon">+</span>
              Add Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
