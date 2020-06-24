import React, { Component } from 'react';
import CardList from './CardList';
import FilterList from './FilterList';
import { JobStoreProvider } from '../contexts/JobStore';

export default class App extends Component {
  render() {
    return (
      <JobStoreProvider>
        <div className='app'>
          <FilterList />
          <CardList />
        </div>
      </JobStoreProvider>
    );
  }
}
