import React, { Component } from 'react'
import util from '../util'
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions'

class Basket extends Component {

 
    render() {
        const {cartItems} = this.props; 
        return (
            <div className="alert alert-info">

            {cartItems.length===0? "Basket is empty": 
            <div>You have {cartItems.length} products in the basket.</div>}                
            
            {cartItems.length > 0 && 
            <div>
                <ul>
                    {cartItems.map(item => 
                    <li key={item.id}>
                        <b>{item.title}   </b>
                        
                        <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>
                                        X</button>

                                        <br/>
                        {(item.count)} X  {util.formatCurrency(item.price)}
                    </li>
                    )}
                </ul>

                <div  >

                <b>Total: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * (c.count)), 0))}
                        </b>
                                                
                        <button onClick={() => alert('Todo: Implement checkout page.')} 
                        className="btn btn-primary btn-block">checkout</button>
                </div>             
                
            </div>}

            </div>
        )
    }
}

const mapStateToProps = state => (
    { cartItems: state.cart.items }
);


export default connect(mapStateToProps, { removeFromCart })(Basket);