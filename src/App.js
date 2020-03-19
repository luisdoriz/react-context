import React from 'react';

import Context from './Context';
import List from './components/views/List';

function App() {
  return (
    <Context.Provider>
      <List />
    </Context.Provider>
  );
}

export default App;
