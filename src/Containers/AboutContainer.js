import React, { useEffect, useState } from 'react';
import { getStatics } from '../Services/StaticsService';
import StaticComponent from '../Components/StaticComponent'

export default function AboutContainer() {
  const [staticPages, setStaticPages] = useState({ loading: false, about: '' });

  useEffect(() => {
    const fetchData = async () => {
      const staticData = await getStatics();

      setStaticPages({ loading: true, about: staticData.data.data[0].about});
      console.log('staticData: ', staticData.data.data[0].about);
    };
    fetchData();
  }, []);
  return <div>{staticPages.loading && <StaticComponent data={staticPages.about}/>}</div>;
}
