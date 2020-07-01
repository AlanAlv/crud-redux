import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../types'
import clientAxios from '../config/axios';
import Swal from 'sweetalert2'

// Create New Products
export function createNewProductAction(product){
    return async  (dispatch) => {
        dispatch(addProduct());

        try {
            // Insert to API
            await clientAxios.post('/produts', product);

            // Updates state if inserted successfuly
            dispatch(addProductSuccess(product));

            // Alert
            Swal.fire(
                'Success',
                'The product was added successfuly',
                'success'
            )
        } catch (error) {
            console.log(error);
            // Updates state if insert fails
            dispatch(addProductError(true));

            // Error alert
            Swal.fire({
                icon: 'error',
                title: 'There was an error',
                text: 'There was an error, try again'
            });
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

// Gets products from db
export function getProductsAction(){
    return async dispatch => {
        dispatch (getProducts());

        try {
            const answer = await clientAxios.get('/products');
            dispatch( getProductsSuccess(answer.data));
        } catch (error) {
            dispatch (getProductsError());
        }
    }
}

const getProducts = () => ({
    type: START_GET_PRODUCTS,
    payload: true
})

const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
})

const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR,
    payload: true
})