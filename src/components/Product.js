import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const Product = ({product}) => {
    const { name, price, id } = product;

    const dispatch = useDispatch();

    // Comfirm delete
    const confirmDeleteProduct = id => {

        // Ask User
        Swal.fire({
            title: 'Are you sure?',
            text: "A deleted product can´t be recovered",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                // Pass to action
                dispatch(deleteProductAction(id));
            }
          })


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