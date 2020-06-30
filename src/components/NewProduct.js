import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux Actions
import { createNewProductAction } from '../actions/productActions';

const NewProduct = () => {

    const dispatch = useDispatch()

    // Calls action from productActions
    const addProduct = () => dispatch( createNewProductAction() );

    // User submits
    const submitNewProduct = e => {
        e.preventDefault();

        // Validate Form

        // Check Error

        // Create new Product
        addProduct();
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add New Product
                        </h2>

                        <form 
                            onSubmit={submitNewProduct}
                        >

                            <div className="form-group">
                                <label>Product Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Product Name"
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Product Price"
                                    name="price"
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold 
                                    text-uppercase d-block w-100"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;