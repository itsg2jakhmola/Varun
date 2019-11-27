export const addProduct = (products) => {
    return {
        type: 'ADD_PRODUCT',
        products
    }
}

export const deleteProduct = (productid) => {
    return {
        type: 'DELETE_PRODUCT',
        productid
    }
}

export const editProduct = (productid) => {
    return {
        type: 'EDIT_PRODUCT',
        productid
    }
}
