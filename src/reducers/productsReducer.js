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
} from '../types';

// Each reducer has its own state
const initialState = {
    products: [],
    error: null,
    loading: false,
    productDelete: null,
    productEdit: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case START_GET_PRODUCTS:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            };
        case GET_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
        case PRODUCT_DELETE_ERROR:
        case PRODUCT_EDIT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case SELECT_PRODUCT_DELETE:
            return {
                ...state,
                productDelete: action.payload
            }
        case PRODUCT_DELETE_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => 
                    product.id !== state.productDelete),
                productDelete: null
            }
        case SELECT_PRODUCT_EDIT:
            return{
                ...state,
                productEdit: action.payload
            }
        case PRODUCT_EDIT_SUCCESS:
            return{
                ...state,
                productEdit: null,
                products: state.products.map(product => 
                    product.id  === action.payload.id 
                        ? 
                            product = action.payload
                        :
                            product
                    )
            }
        default:
            return state;
    }
}