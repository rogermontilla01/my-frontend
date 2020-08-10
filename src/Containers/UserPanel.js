import React, { useState, useEffect } from 'react';
import { UserById, getUserSales } from '../Services/UserService';
import UserPanelComponent from '../Components/UserPanelComponent';
import { useField } from 'formik';
export default function UserPanel() {
  const [userFile, setUserFile] = useState({ loading: false, user: [], sales: [] });

  useEffect(() => {
    const fetchData = async () => {
      const userData = await UserById(localStorage.getItem('user_id'));
      const userSales = await getUserSales(localStorage.getItem('user_id'));

      setUserFile({ loading: true, user: userData.data.user, sales: userSales.data.sales });
      console.log('userData: ', userData);
      console.log('userSales: ', userSales);
    };
    fetchData();
  }, []);
  return <div>{userFile.loading && <UserPanelComponent userData={userFile.user} userSales={userFile.sales} />}</div>;
}
