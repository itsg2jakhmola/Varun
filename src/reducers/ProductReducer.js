const initialState = {
    products: []
}

const ProductReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'ADD_PRODUCT' :
            return {
                products: state.products.concat([action.products])
            }     
        case 'DELETE_PRODUCT':
            return {
                products: state.products.filter( (p) => p.id !== action.productid)
            }  
        case 'EDIT_PRODUCT' :
            return {
                products: state.products.filter( (p) => p.id === action.productid)
            }
        default:
            return state
    }
}

export default ProductReducer
