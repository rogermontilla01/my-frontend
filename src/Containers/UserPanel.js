import React, { useState, useEffect } from 'react';
import { UserById, getUserSales } from '../Services/UserService';
import UserPanelComponent from '../Components/UserPanelComponent';
import { useHistory } from 'react-router-dom';

export default function UserPanel() {
  const history = useHistory();
  const [userFile, setUserFile] = useState({ loading: false, user: [], sales: [] });

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('user_id')) {
        const userData = await UserById(localStorage.getItem('user_id'));
        const userSales = await getUserSales(localStorage.getItem('user_id'));
        setUserFile({ loading: true, user: userData.data.user, sales: userSales.data.sales });
      }else{
        history.push('/login');
      }
    };
    fetchData();
  }, []);
  return <div>{userFile.loading && <UserPanelComponent userData={userFile.user} userSales={userFile.sales} />}</div>;
}
