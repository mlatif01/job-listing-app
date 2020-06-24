import React from 'react';
import jsonData from '../../data.json';
import Card from './Card';

export default function CardList() {
  return (
    <div className='card-list'>
      {jsonData.map((data, i) => (
        <Card key={i} jobInfo={data} />
      ))}
    </div>
  );
}
