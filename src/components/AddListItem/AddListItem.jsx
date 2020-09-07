import React, { useState, useContext } from 'react';

import Context from '../../Context';

const AddListItem = () => {
  const { dispatchList } = useContext(Context.Consumer);
  const intialValue = '';
  const [name, setName] = useState(intialValue);
  const onSubmit = () => {
    const action = {
      type: 'add',
      payload: {
        name,
      },
    };
    dispatchList(action); // manda a llamar a las actiones de la lista
    setName(intialValue); // limpia input
  };
  return (
    <div>
      <h3>Agregar a la Lista:</h3>
      <form>
        <label htmlFor="name">Nombre: </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          disabled={!name.length}
          onClick={onSubmit}
        >
          Agregar a la lista
        </button>
      </form>
    </div>
  )
}

export default AddListItem;
