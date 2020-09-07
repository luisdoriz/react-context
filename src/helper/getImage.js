import { useState, useEffect } from 'react';

const getUrl = (name) => `https://customsearch.googleapis.com/customsearch/v1?key=${'API_KEY'}&q=${name}&searchType=image&lr=lang_en&cx=011589787891027492495:ftlunbpocar`;

export const useFetch = (name) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    if (!name) return;
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(getUrl(name));
      const data = await response.json();
      if (data?.items?.length > 0) {
        const { items } = data;
        const src = items[0];
        if (src?.link) {
          setData(src.link);
        }
      } else {
        setData('');
      }
      setLoading(false);
    };

    fetchData();
  }, [name]);
  return { loading, data };
};

export default useFetch;
