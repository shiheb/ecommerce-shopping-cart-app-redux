import { FETCH_PRODUCTS , FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE,FILTER_PRODUCTS_BY_PRICE } from './types';

export const fetchProducts = () => (dispatch) => {


    fetch("http://localhost:8000/products").then(res => res.json()).then( data => 
        {
        return  dispatch({
            type: FETCH_PRODUCTS,
            payload: data,
        })
        } );
    
}

export const filterProductsBySize = (products, size) => (dispatch) => {

    const productsInt = products.slice();
        return  dispatch({
            type: FILTER_PRODUCTS_BY_SIZE,
            payload: {
                size: size,
                items: size===''? productsInt: productsInt.filter(a => a.availableSizes.indexOf(size.toUpperCase()) >= 0)
            }
        })
}

export const filterProductsByPrice = (products, price) => (dispatch) => {

    const productsInt = products.slice();
        return  dispatch({
            type: FILTER_PRODUCTS_BY_PRICE ,
            payload: {
                price: price,
                items: price === 0? productsInt: productsInt.filter(
                    a => a.price <= price)
            }
        })
}



export const sortProducts = (items, sort) => (dispatch) => {

   const products = items.slice();

    if (sort !== "")
    {
     products.sort((a,b) => 
      (sort=== "lowest")? (a.price > b.price?1:-1) : (a.price < b.price?1:-1))
    }
    else {
      products.sort((a,b) => (a.id > b.id?1:-1));
    }
    
    return  dispatch({
    
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: products
        }
    })
  

}