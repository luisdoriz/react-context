import React, { useContext } from 'react';

import Context from '../../Context';

const ListItemView = ({
  active,
  item,
}) => {
  const { setActiveListItem } = useContext(Context.Consumer);
  return (
    <li
      onClick={() => setActiveListItem(item.id)}
    >
      <h2
        className={active && 'active'}
        key={item.id}
      >
        {item.name}
      </h2>
    </li>
  )
}

export default ListItemView;
