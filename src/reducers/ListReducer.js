export const listInitialState = [
  {
    id: 1,
    name: 'Elon Musk',
  },
  {
    id: 2,
    name: 'Steve Jobs',
  },
  {
    id: 3,
    name: 'Miguel Ramirez',
  },
  {
    id: 4,
    name: 'Alan Arostegui Maranto',
  },
];

export const listReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const id = state[state.length - 1].id + 1;
      action.payload.id = id;
      return [...state, action.payload];
    case 'delete':
      const updatedState = state;
      updatedState.splice(updatedState.indexOf(action.payload, 1));
      return updatedState;
    default:
      return state;
  }
};

export default listReducer;