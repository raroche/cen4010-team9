import React, { Component } from 'react';

class AddPayment extends Component {
    constructor(props){
        super(props)
        this.state = {
            card_nickname: "",
            card_number: "",
            expiration: "",
            exp_month: "",
            exp_year: "",
            cvv: ""
        };
        this.updatePayment = this.updatePayment.bind(this);
        this.submitPayment = this.submitPayment.bind(this);
    }
    

    updatePayment = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            expiration: this.state.exp_month+"/"+this.state.exp_year
        })
    }

    submitPayment = (e) => {
        e.preventDefault();

        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;       //user id
        const payments = "/payments/";

        fetch(url+currentUser+payments,{
            method: 'post',
            body: JSON.stringify({
                card_nickname: this.state.card_name,
                card_number: this.state.card_number,
                exp_month: this.state.exp_month,
                exp_year: this.state.exp_year,
                cvv: this.state.cvv
            }),headers: { "Content-Type": "application/json; charset=UTF-8" }
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

        this.props.addPayment(this.state);
    }

    render() {
        return (

            <form onSubmit={this.submitPayment}>
                <div className="input-group">
                    <label htmlFor="cardName">Card Name</label>
                    <input type="text" id="card_nickname" onChange={this.updatePayment} className="login-input" placeholder="My Card"/>
                </div>

                <div className="input-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="card_number" onChange={this.updatePayment} className="login-input" placeholder="1111222233334444"/>
                </div>
                       
                <div className="input-group">
                    <label htmlFor="expiration">Expiration</label>
                    <input type="text" id="exp_month" onChange={this.updatePayment} className="login-input" placeholder="01"/> /
                    <input type="text" id="exp_year" onChange={this.updatePayment} className="login-input" placeholder="20"/>
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