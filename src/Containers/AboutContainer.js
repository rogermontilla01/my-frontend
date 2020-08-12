import React, { useEffect, useState } from 'react';
import { getStatics } from '../Services/StaticsService';
import AboutComponent from '../Components/AboutComponent'

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
  return <div>{staticPages.loading && <AboutComponent aboutData={staticPages.about}/>}</div>;
}
