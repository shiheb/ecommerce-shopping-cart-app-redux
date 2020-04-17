import React, { Component } from 'react'
import util from '../util';
import {connect} from 'react-redux';
import { fetchProducts } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'
 class Products extends Component {

    UNSAFE_componentWillMount(){

        this.props.fetchProducts();
    }

    render() {
        const productItems = this.props.products.map(product =>
            <div className="grid-item" key={product.id}>
                <div className="thumbnail text-center">
                   <a href={`#${product.id}`}  onClick={() => this.props.addToCart(this.props.cartItems, product)}>
                       <img src={`/products/${product.sku}_2.jpg`} alt={product.description}/>
                        <p className="prodTitle">
                       
                            {product.title}
                        </p>
                   </a>
                   <div>
                       <b>{util.formatCurrency(product.price)}</b>
                       <button className="btn btn-primary btn-block"
                     onClick={() => this.props.addToCart(this.props.cartItems, product)}>
                           Add To Cart
                       </button>
                   </div>
                </div>
            </div>

        )
        return (
            <div className="row">
            {productItems}
            </div>
        )
    }
}


const mapStateToProps = state => (
    { products: state.products.filteredItems,
      cartItems: state.cart.items,
     }
);


export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);