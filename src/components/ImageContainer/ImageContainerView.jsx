import React, { useContext } from 'react';

import Context from '../../Context';
import { useFetch } from '../../helper/getImage';

const ImageContainerView = () => {
  const { activeListItem, list } = useContext(Context.Consumer);
  const item = list.find((listItem) => listItem.id === activeListItem);
  const { loading, data } = useFetch(item.name);
  console.log(loading, data);
  if (loading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }
  if (data.length === 0) {
    return (
      <>
        <h2>No image availbale</h2>
      </>
    );
  }

  return (
    <div>
      <img src={data} alt="item" />
    </div>
  )
}

export default ImageContainerView;
