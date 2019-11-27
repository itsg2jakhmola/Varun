import React from 'react'
import { Link } from 'react-router-dom'
function ProductForm(props) {
 
    return(
        <form>
            <div className="form-group">
                <label htmlFor="productid">Sku</label>
                <input type="email" 
                    className="form-control" 
                    id="sku" 
                    name="sku"
                    aria-describedby="emailHelp" 
                    onChange={props.handleChange}
                    value={props.sku}
                    placeholder="Enter SKU"/>
           </div>
           <div className="form-group">
                <label htmlFor="productname">Product Name</label>
                <input type="text" 
                    className="form-control" 
                    id="productName"
                    name="productName" 
                    aria-describedby="emailHelp" 
                    onChange={props.handleChange}
                    defaultValue={props.productName}
                    placeholder="Enter Product Name"/>
           </div>

           <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" 
                    className="form-control" 
                    id="description"
                    name="description" 
                    aria-describedby="emailHelp" 
                    onChange={props.handleChange}
                    defaultValue={props.description}
                    placeholder="Enter description"/>
           </div>
            <div className="form-group" >
                <label htmlFor="duration">Duration</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="duration"
                    name="duration" 
                    onChange={props.handleChange}
                    defaultValue={props.duration}
                    placeholder="Enter duration" />
            </div>
           
            <button className="btn btn-primary" onClick={props.clickHandle} >Add Product</button>
            <Link to="/">Back to home</Link>
            </form>
    )
}

export default ProductForm