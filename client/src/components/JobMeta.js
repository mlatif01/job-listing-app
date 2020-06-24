import React from 'react';

export default function JobMeta({ postedAt, contract, location }) {
  return (
    <div className='job-meta'>
      <p>{postedAt} -</p>
      <p>{contract} -</p>
      <p> {location}</p>
    </div>
  );
}
