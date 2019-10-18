import React, { Component } from 'react';

class AddShipping extends Component {


    updateShipping = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitShipping = (e) => {
        this.props.addShipping(this.state);
    }

    render() {
        return (

            <form onSubmit={this.submitShipping}>
                <div className="input-group">
                    <label htmlFor="shippingName">Address Name</label>
                    <input type="text" id="shippingName" onChange={this.updateShipping} className="login-input" placeholder="My House"/>
                </div>

                <div className="input-group">
                    <label htmlFor="shippingAddress">Street Address</label>
                    <input type="text" id="shippingAddress" onChange={this.updateShipping} className="login-input" placeholder="123 SW 100 St"/>
                </div>
                       
                <div className="input-group">
                    <label htmlFor="ciy">City</label>
                    <input type="text" id="city" onChange={this.updateShipping} className="login-input" placeholder="Miami"/>
                </div>  

                <div className="input-group">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" onChange={this.updateShipping} className="login-input" placeholder="FL"/>
                </div>

                <div className="input-group">
                    <label htmlFor="zipcode">Zip Code</label>
                    <input type="text" id="zipcode" onChange={this.updateShipping} className="login-input" placeholder="33133"/>
                </div>    

                <button type="button" onClick={this.submitShipping} className="login-btn">Add Shipping</button>
            </form>
        )
    }
}

export default AddShipping;