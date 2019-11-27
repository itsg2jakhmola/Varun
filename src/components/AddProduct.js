import React, { Component } from 'react'
import ProductForm from './ProductForm'
import shortid from 'shortid'
import { connect } from 'react-redux'
import * as actions from '../actions/ProductAction'
class AddProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [],
            currentProduct : {
                sku: '',
                productName: '',
                description: '',
                duration: '',
            }
        }       
    }

    handleChange = (e) => {
         this.setState({
           currentProduct: {
            ...this.state.currentProduct,
            [e.target.name]: e.target.value
           }
       })
    }

    clickHandle = (e) => {
        e.preventDefault()
       
        const currentProduct = this.state.currentProduct;
        currentProduct.id = shortid.generate();
       
        this.props.dispatch(actions.addProduct(currentProduct))
        this.props.history.push('/');
        // this.setState({
        //     products: [...this.state.products, currentProduct]
        // })
    }

    render() {
  
        return (
            <ProductForm 
                handleChange={this.handleChange}
                clickHandle={this.clickHandle}
                product={this.state.currentProduct}
            />
        )
    }
}

// function mapDispatchToProps(dispatch) {
//         const addProduct = (product) => dispatch.addProduct(product)
// }

export default connect(null)(AddProduct)