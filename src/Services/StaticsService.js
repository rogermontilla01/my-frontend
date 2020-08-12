import axiosIns from '../Config/axios';

export function getStatics() {
    return axiosIns.get('static/', {
        headers: {
          common: {
            'x-access-token': localStorage.getItem('token')
          }
        },
        timeout: 5000,
      });
  }