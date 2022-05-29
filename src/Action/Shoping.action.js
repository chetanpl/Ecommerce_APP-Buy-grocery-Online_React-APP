export const AddITEM = 'AddITEM';
export const REMOVECART_ITEM = 'REMOVECART_ITEM';
export const LOADPRODUCTS = 'LOADPRODUCTS';
export const GETPRODUCTS = 'GETPRODUCTS';
export const APIERROR = 'APIERROR';

export const addTOCart = (product = []) => {
    return {
        type: AddITEM,
        payload: product
    }
}

export const removeTOCart = (id) => {
    return {
        type: REMOVECART_ITEM,
        payload: id
    }
}

export const loadProducts = (products) => {
    return {
        type: LOADPRODUCTS,
        payload: products
    }
}

export const loadError = (error) => {
    return {
        type: APIERROR,
        payload: error
    }
}
export const getProduct = () => {
    return {
        type: GETPRODUCTS,
        payload: LOADPRODUCTS
    }
}