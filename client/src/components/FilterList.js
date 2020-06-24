import React, { useState } from 'react';
import { useJobStore } from '../contexts/JobStore';

export default function FilterList() {
  const { state, dispatch } = useJobStore();
  console.log(state);

  if (state.filteredCategories.length === 0) {
    return null;
  }

  return (
    <div className='card-content filter-list'>
      <div>
        {state.filteredCategories.map((data, i) => (
          <button
            className='btn btn-filter'
            key={i}
            onClick={() => dispatch({ type: 'removeFromList', payload: data })}
          >
            {data}
          </button>
        ))}
      </div>{' '}
      <button className='btn btn-clear' onClick={() => dispatch({ type: 'clearAll' })}>
        Clear
      </button>
    </div>
  );
}
