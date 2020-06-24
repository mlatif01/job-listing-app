/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import logo from './images/photosnap.svg';
import JobTags from './JobTags';
import JobMeta from './JobMeta';
import JobCategories from './JobCategories';
import { useJobStore } from '../contexts/JobStore';

export default function Card({ jobInfo }) {
  const [categories, setCategories] = useState(null);
  const [isFeatured, setIsFeatured] = useState(null);
  const [showCard, setShowCard] = useState(true);
  const { state, dispatch } = useJobStore();

  const checkFilter = (categories) => {
    const result = state.filteredCategories.every((val) =>
      categories.includes(val)
    );
    setShowCard(result);
  };

  useEffect(() => {
    // init categories for filtering
    const categoryInfo = {
      role: jobInfo.role,
      level: jobInfo.level,
      languages: jobInfo.languages,
    };
    const categories = [];
    categories.push(categoryInfo.role);
    categories.push(categoryInfo.level);
    categories.push(...categoryInfo.languages);
    setCategories(categories);
    checkFilter(categories);
    setIsFeatured(jobInfo.featured);
  }, [state.filteredCategories]);

  if (!showCard) {
    return null;
  }

  return (
    <div className={`card-content ${isFeatured ? 'featured' : ''}`}>
      <div className='card-content-item-1'>
        <img src={logo}></img>
        <div className='job-info'>
          <div className='job-info-top'>
            <h5>{jobInfo.company}</h5>
            <JobTags isNew={jobInfo.new} isFeatured={jobInfo.featured} />
          </div>
          <div className='job-info-middle'>
            <h4>{jobInfo.position}</h4>
          </div>
          <div className='job-info-bottom'>
            <JobMeta
              postedAt={jobInfo.postedAt}
              contract={jobInfo.contract}
              location={jobInfo.location}
            />
          </div>
        </div>
      </div>
      <div className='card-content-item-2'>
        <JobCategories categories={categories} />
      </div>
    </div>
  );
}
