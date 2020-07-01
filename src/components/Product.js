import React from 'react'
import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const Product = ({product}) => {
    const { name, price, id } = product;

    const dispatch = useDispatch();

    // Comfirm delete
    const confirmDeleteProduct = id => {

        // Ask User

        // Pass to action
        dispatch(deleteProductAction(id));
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td> <span className="font-weight-bold"> $ {price} </span></td>
            <td className="actions">
                <Link 
                    to ={`/products/edit/${id}`}
                    className="btn btn-primary mr-2"
                >
                    Edit
                </Link>
                <button 
                    type ="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteProduct(id)}
                >
                    Delete
                </button>
            </td>
        </tr>
     );
}
 
export default Product;