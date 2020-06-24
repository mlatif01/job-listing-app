import React, { createContext, useContext, useReducer } from 'react';

const JobStoreContext = createContext();
const initialState = {
  filteredCategories: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addToList':
      return {
        ...state,
        filteredCategories: [...state.filteredCategories, action.payload],
      };
    case 'removeFromList':
      return {
        ...state,
        filteredCategories: state.filteredCategories.filter(
          (item) => item !== action.payload
        ),
      };
    case 'clearAll':
      return {
        ...state,
        filteredCategories: [],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const JobStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <JobStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </JobStoreContext.Provider>
  );
};

export const useJobStore = () => useContext(JobStoreContext);
