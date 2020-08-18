import axiosIns from '../Config/axios';

export function getProds(pageNumber) {
  return axiosIns.get('products/?page='+pageNumber, {
    timeout: 5000,
  });
}

//Tuve que agregar el token aca porque axios me da un error de jwt malformed, parece que no actualiza la instancia
export function getProdById(id) {
  return axiosIns.get('products/by-id/' + id, {
    headers: {
      common: {
        'x-access-token': localStorage.getItem('token'),
      },
    },
    timeout: 5000,
  });
}

export function getProdByPrice(min, max, category) {
  return axiosIns.get('products/filter-price/', {
    headers: {
      common: {
        'x-access-token': localStorage.getItem('token'),
      },
    },
    timeout: 5000,
    params: {
      min: min,
      max: max,
      category: category,
    },
  });
}

export function getCategories(min, max) {
  return axiosIns.get('/subcategory/list/', {
    headers: {
      common: {
        'x-access-token': localStorage.getItem('token'),
      },
    },
    timeout: 5000,
  });
}

export function globalSearch(name) {
  return axiosIns.get('/products/by-name', {
    headers: {
      common: {
        'x-access-token': localStorage.getItem('token'),
      },
    },
    timeout: 5000,
    params: {
      name: name,
    },
  });
}

function escapeRegex(Search) {
  return Search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
