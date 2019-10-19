import React, { Component } from 'react';
import AddShipping from './AddShipping';
import './ShippingOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class ShippingOptions extends Component {
    state = {
        addresses : [
            {id: 1, shippingName: 'Test', shippingAddress: '123 W city', city: '01/20', state: 'FL', zip: 33135}
        ]
    }

    addShipping = (address) => {
        address.id = Math.random();
        let addresses = [...this.state.addresses, address];
        this.setState({
            addresses: addresses
        })
    }

    deleteShipping = (id) => {
        let addresses = this.state.addresses.filter(address => {
            return address.id !== id
        });
        this.setState({
            addresses: addresses
        })
    }

    render() {
        const { addresses } = this.state;
        const addresslist = addresses.map(address => {
            return (
            <div className="options">   
                <div key={address.id}>
                    <div>Address Name: {address.shippingName}</div>
                    <div>Address: {address.shippingAddress}</div>
                    <div>City: {address.city}</div>
                    <div>State: {address.state}</div>
                    <div>Zip Code: {address.zip}</div>
                </div>
                <div>
                    <button className="delete-btn" onClick={() => {this.deleteShipping(address.id)}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div> 
            )
        })
        return (
            <div>
                { addresslist }
                <AddShipping addShipping={this.addShipping}/>
            </div>
        )
    }

}


export default ShippingOptions;