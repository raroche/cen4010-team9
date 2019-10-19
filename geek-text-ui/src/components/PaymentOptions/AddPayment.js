import React, { Component } from 'react';

class AddPayment extends Component {

    state = {
        cardName: null,
        cardNumber: null,
        expiration: null,
        cvv: null
    }

    updatePayment = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitPayment = (e) => {
        this.props.addPayment(this.state);
    }

    render() {
        return (

            <form onSubmit={this.submitPayment}>
                <div className="input-group">
                    <label htmlFor="cardName">Card Name</label>
                    <input type="text" id="cardName" onChange={this.updatePayment} className="login-input" placeholder="My Card"/>
                </div>

                <div className="input-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" onChange={this.updatePayment} className="login-input" placeholder="1111222233334444"/>
                </div>
                       
                <div className="input-group">
                    <label htmlFor="expiration">Expiration</label>
                    <input type="text" id="expiration" onChange={this.updatePayment} className="login-input" placeholder="01/20"/>
                </div>  

                <div className="input-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" onChange={this.updatePayment} className="login-input" placeholder="123"/>
                </div>     

                <button type="button" onClick={this.submitPayment} className="login-btn">Add Payment</button>
            </form>
        )
    }

}

export default AddPayment;