import React from 'react'
import ProductForm from './ProductForm'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class EditProduct extends React.Component {

    constructor(props) {
        super(props)
    }
    
    handleChange = () => {

    }

    clickHandle = () => {

    }


    render() {
        
        return (
            <div>
                <h2>Edit Product</h2>

                <form>
                <div className="form-group">
                    <label htmlFor="productid">Sku</label>
                    <input type="email" 
                        className="form-control" 
                        id="sku" 
                        name="sku"
                        aria-describedby="emailHelp" 
                        onChange={this.props.handleChange}
                        value={this.props.product.sku}
                        placeholder="Enter SKU"/>
            </div>
            <div className="form-group">
                    <label htmlFor="productname">Product Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="productName"
                        name="productName" 
                        aria-describedby="emailHelp" 
                        onChange={this.props.handleChange}
                        defaultValue={this.props.product.productName}
                        placeholder="Enter Product Name"/>
            </div>

            <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                        className="form-control" 
                        id="description"
                        name="description" 
                        aria-describedby="emailHelp" 
                        onChange={this.props.handleChange}
                        defaultValue={this.props.product.description}
                        placeholder="Enter description"/>
            </div>
                <div className="form-group" >
                    <label htmlFor="duration">Duration</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="duration"
                        name="duration" 
                        onChange={this.props.handleChange}
                        defaultValue={this.props.product.duration}
                        placeholder="Enter duration" />
                </div>
            
                <button className="btn btn-primary" onClick={this.props.clickHandle} >Edit Product</button>
                <Link to="/">Back to home</Link>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        product: state.ProductReducer.products[0]
    }
}

export default connect(mapStateToProps)(EditProduct)