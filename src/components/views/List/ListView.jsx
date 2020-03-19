import React, { useContext } from 'react';

import Context from '../../../Context';
import ListItem from '../../ListItem';
import AddListItem from '../../AddListItem';

import './styles.css';

const ListView = () => {
  const {
    list,
    activeListItem,
  } = useContext(Context.Consumer);

  return (
    <div className='list--container'>
      <h2>Id activo: {activeListItem}</h2>
      <ul>
        {list.map((listItem) =>
          <ListItem
            active={listItem.id === activeListItem}
            item={listItem}
          />
        )}
      </ul>
      <AddListItem />
    </div>
  )
}

export default ListView;
