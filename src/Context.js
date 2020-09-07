import React, { createContext, useState, useReducer } from 'react';

import { listReducer, listInitialState } from './reducers/ListReducer';

const Context = createContext();



const Provider = ({ children }) => {
  const [list, dispatchList] = useReducer(listReducer, listInitialState);
  const [activeListItem, setActiveListItem] = useState(2);
  const value = {
    list,
    dispatchList,
    activeListItem,
    setActiveListItem,
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context,
};
