import React, { useContext } from 'react';

import Context from '../../Context';

const ListItemView = ({
  item,
}) => {
  const { setActiveListItem,  activeListItem } = useContext(Context.Consumer);
  return (
    <li
      onClick={() => setActiveListItem(item.id)}
    >
      <h2
        className={activeListItem === item.id && 'active'}
        key={item.id}
      >
        {item.name}
      </h2>
    </li>
  )
}

export default ListItemView;
