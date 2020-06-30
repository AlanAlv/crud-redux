import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux Actions
import { createNewProductAction } from '../actions/productActions';

const NewProduct = () => {

    // Component State
    const [ name, saveName ] = useState('');
    const [ price, savePrice ] = useState(0);

    const dispatch = useDispatch()

    // Calls action from productActions
    const addProduct = product => dispatch( createNewProductAction(product) );

    // User submits
    const submitNewProduct = e => {
        e.preventDefault();

        // Validate Form
        if (name.trim() === '' || price === 0){
            return;
        }

        // Check Error

        // Create new Product
        addProduct({
            name,
            price
        });
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
                                    value={name}
                                    onChange={e => saveName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Product Price"
                                    name="price"
                                    value={price}
                                    onChange={e => savePrice(Number(e.target.value))}
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