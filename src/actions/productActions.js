import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types'

// Create New Products
export function createNewProductAction(product){
    return (dispatch) => {
        dispatch(addProduct());

        try {
            dispatch(addProductSuccess(product));
        } catch (error) {
            dispatch(addProductError(true));
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

// Product added to db successfuly
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

// Error adding product to db
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})