import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    SELECT_PRODUCT_DELETE,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_ERROR,
    SELECT_PRODUCT_EDIT,
    START_EDIT_PRODUCT,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_ERROR
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

// Selects and Deletes Product
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(selectProductDelete(id));

        try {
            await clientAxios.delete(`/products/${id}`);
            dispatch(deleteProductSuccess());

            // Alert on Delete
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(deleteProductError());
        }
    }
}

const selectProductDelete = id => ({
    type: SELECT_PRODUCT_DELETE,
    payload: id
});

const deleteProductSuccess = () => ({
    type: PRODUCT_DELETE_SUCCESS
});

const deleteProductError = () => ({
    type: PRODUCT_DELETE_ERROR,
    payload: true
});

// Select product edit
export function selectEditProductAction(product) {
    return(dispatch) => {
        dispatch(selectProductEdit(product))
    }
}

const selectProductEdit = product => ({
    type: SELECT_PRODUCT_EDIT,
    payload: product
})

// Edits product on API & state
export function editProductAction(product) {
    return async (dispatch) => {
        dispatch(editProduct());

        try {
            const result = await clientAxios.put(`/products/${product.id}`, product); 
            dispatch(editProductSuccess(product));
        } catch (error) {
            
        }
    }
}

const editProduct = () => ({
    type: START_EDIT_PRODUCT,
})

const editProductSuccess = product => ({
    type: PRODUCT_EDIT_SUCCESS,
    payload: product
})

const editProductError = () => ({
    type: PRODUCT_EDIT_ERROR,
    payload: true
})