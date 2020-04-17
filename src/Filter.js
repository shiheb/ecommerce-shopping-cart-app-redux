import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProductsBySize, filterProductsByPrice, sortProducts } from './actions/productActions';
class Filter extends Component {
    render() {
        return (
            <div className="row">
           
                <div className="col-md-3">
                <br/>
                <span className="focused">  {this.props.count} </span> products found.
                </div>
                
              <div className="col-md-4 ">

                <label htmlFor="priceRange">Price Range: 0 - 
                <span className="focused">{this.props.price}</span></label>
                <input type="range" name="priceRange" min="0" max="150" step="0.01" value={this.props.price} onChange={(e) => {this.props.filterProductsByPrice(this.props.products, e.target.value)}}  />
               
                </div> 

                <div className="col-md-3">
                <label>
                    Order by
                    <select className="form-control" value={this.props.sort}
                    onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)} >
                        <option value="">Select</option>
                        <option value="lowest">lowest to highest</option>
                        <option value="highest">highest to lowest</option>
                    </select>
                </label>
                </div>
                <div className="col-md-2">
                <label>
                    Filter by size
                    <select className="form-control" value={this.props.size}
                    onChange={(e) => this.props.filterProductsBySize(this.props.products, e.target.value)} >
                        <option value="">All</option>
                        <option value="x">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>

                    </select>
                </label>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort,
    price: state.products.price,
    count:  state.products.filteredItems.length,
})
export default connect(mapStateToProps, {filterProductsBySize, sortProducts, filterProductsByPrice})(Filter)