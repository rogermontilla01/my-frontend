import axiosIns from '../Config/axios';

export function getProds() {
  return axiosIns.get('products/', {
    timeout: 5000,
  });
}

export function getProdById(id) {
  return axiosIns.get('products/' + id, {
    timeout: 5000,
  });
}
