import React, { useContext } from 'react';

import Context from '../../../Context';
import ListItem from '../../ListItem';
import AddListItem from '../../AddListItem';
import ImageContainer from '../../ImageContainer';

import './styles.css';

const ListView = () => {
  const {
    list,
    activeListItem,
  } = useContext(Context.Consumer);

  return (
    <div className='list-container'>
      <AddListItem />
      <div>
        <h2>Id activo: {activeListItem}</h2>
        <ul>
          {list.map((listItem) =>
            <ListItem
              item={listItem}
            />
          )}
        </ul>
      </div>
      <ImageContainer />
    </div>
  )
}

export default ListView;
