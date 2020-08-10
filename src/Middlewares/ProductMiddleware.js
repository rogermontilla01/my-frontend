//Filtrar productos y contar cantidades
export function removeDuplicates(prods, prop){
    var newArray = [];
    var lookupObject = {};
    for (var i in prods) {
      lookupObject[prods[i][prop]] = prods[i];
    }
    for (i in lookupObject) {
      newArray.push({
        description: lookupObject[i].description,
        featured: lookupObject[i].featured,
        id: lookupObject[i].id,
        images: lookupObject[i].images,
        name: lookupObject[i].name,
        offert: lookupObject[i].offert,
        price: lookupObject[i].price,
        purchase: count(prods, lookupObject[i].id),
        sku: lookupObject[i].sku,
        subcategory: lookupObject[i].subcategory,
      });
    }
    return newArray;
  };

//Contar productos
function count(prods, item){
    let quantity = 0;
    prods.forEach((prod) => {
      if (prod.id == item) {
        quantity += 1;
      }
    });
    return quantity;
  };

// calcular total a mostrar
export function total(prods){
  var total = 0;
  prods.forEach((element)=>{
    if(element.offert){
      total += element.offert * element.purchase
    }else{
      total += element.price * element.purchase
    }
  })

  return total;
}

//Eliminar prodcuto del local storage
export function deleteProd(Element){
  var actualProds = JSON.parse(localStorage.getItem('prods'));
  var filter = actualProds.filter((item) => {
    return item.id != Element;
  });
  if(filter.length == 0){
    localStorage.removeItem('prods')
  }else{
    localStorage.setItem('prods', JSON.stringify(filter))
  }  
};

//Agregar producto al localstorage
export function addProd(prod){
  let prodsArr = [];
  if (localStorage.getItem('prods') == undefined) {
    prodsArr.push(prod);
    localStorage.setItem('prods', JSON.stringify(prodsArr));
  } else {
    prodsArr = JSON.parse(localStorage.getItem('prods'));
    prodsArr.push(prod);
    localStorage.setItem('prods', JSON.stringify(prodsArr));
  }
  
  console.log(prodsArr);
};

