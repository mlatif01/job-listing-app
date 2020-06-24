import React from 'react';

export default function JobTags({ isNew, isFeatured }) {
  return (
    <div className='job-tags'>
      {isNew ? (
        <div className='job-tag job-tag-new'>
          <h6>New!</h6>
        </div>
      ) : null}
      {isFeatured ? (
        <div className='job-tag job-tag-featured'>
          <h6>Featured</h6>
        </div>
      ) : null}
    </div>
  );
}
