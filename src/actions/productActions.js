import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types'
import clientAxios from '../config/axios';

// Create New Products
export function createNewProductAction(product){
    return async  (dispatch) => {
        dispatch(addProduct());

        try {
            // Insert to API
            await clientAxios.post('/products', product);

            // Updates state if inserted successfuly
            dispatch(addProductSuccess(product));
        } catch (error) {
            console.log(error);
            // Updates state if insert fails
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