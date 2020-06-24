/* eslint-disable react/prop-types */
import React from 'react';
import { useJobStore } from '../contexts/JobStore';

export default function JobCategories({ categories }) {
  const { state, dispatch } = useJobStore();

  return (
    <div className='job-categories'>
      <ul className='job-categories-list'>
        {categories
          ? categories.map((data, i) => (
              <button
                key={i}
                className='job-categories-list-item'
                onClick={() => dispatch({ type: 'addToList', payload: data })}
              >
                {data}
              </button>
            ))
          : null}
      </ul>
    </div>
  );
}
