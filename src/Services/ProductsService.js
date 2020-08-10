import axiosIns from '../Config/axios';

export function getProds() {
  return axiosIns.get('products/', {
    timeout: 5000,
  });
}

//Tuve que agregar el token aca porque axios me da un error de jwt malformed, parece que no actualiza la instancia
export function getProdById(id) {
  return axiosIns.get('products/by-id/' + id, {
    headers: {
      common: {
        'x-access-token': localStorage.getItem('token')
      }
    },
    timeout: 5000,
  });
}

/*Revisar la funcion de abajo en el servido express, parece que ya no la necesito*/
// export function getProdsByList(list){
//   return axiosIns.get('products/by-list/', {
//     timeout: 5000,
//     params: {
//       list: list,
//     }
//   })
// }
