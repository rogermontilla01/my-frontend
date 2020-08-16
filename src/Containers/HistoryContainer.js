import React, { useEffect, useState } from 'react';
import { getStatics } from '../Services/StaticsService';
import StaticComponent from '../Components/StaticComponent'

export default function HistoryContainer() {
  const [staticPages, setStaticPages] = useState({ loading: false, history: '' });

  useEffect(() => {
    const fetchData = async () => {
      const staticData = await getStatics();

      setStaticPages({ loading: true, history: staticData.data.data[0].history});
      console.log('staticData: ', staticData.data.data[0].history);
    };
    fetchData();
  }, []);
  return <div>{staticPages.loading && <StaticComponent data={staticPages.history}/>}</div>;
}