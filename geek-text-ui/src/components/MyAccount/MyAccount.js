import React from 'react';
import PaymentOptions from '../PaymentOptions/PaymentOptions';
import ShippingOptions from '../ShippingOptions/ShippingOptions';
import './MyAccount.css';

const MyAccount = props => (

    <div className="myaccount">
        <div className="upper-box">
            <div className="title">Hi</div>
            <div>Name: </div>
            <div>Email: </div>
            <div>Username: </div>
            <div>Password: </div>
            
        </div>
        <div className="lower-box">
            <div className="payment-box">
                <div className="title">Payment Options</div>
                <PaymentOptions />
            </div>
            <div className="shipping-box">
                <div className="title">Shipping Options</div>
                <ShippingOptions />
            </div>
        </div>

    </div>

)


export default MyAccount;