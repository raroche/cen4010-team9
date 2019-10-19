import React, { Component } from 'react';
import AddPayment from './AddPayment';
import './PaymentOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class PaymentOptions extends Component {
    state = {
        cards : [
            {id: 1, cardName: 'Test', cardNumber: '0000-0000-0000-0000', expiration: '01/20', cvv: 123}
        ]
    }

    addPayment = (card) => {
        card.id = Math.random();
        let cards = [...this.state.cards, card];
        this.setState({
            cards: cards
        })
    }
    
    deletePayment = (id) => {
        let cards = this.state.cards.filter(card => {
            return card.id !== id
        });
        this.setState({
            cards: cards
        })
    }

    render() {
        const { cards } = this.state;
        const cardlist = cards.map(card => {
            return (
            <div className="options">
                <div key={card.id}>
                    <div>Card Name: {card.cardName}</div>
                    <div>Card Number: {card.cardNumber}</div>
                    <div>Expiration: {card.expiration}</div>
                    <div>CVV: {card.cvv}</div>
                </div>
                <div>
                    <button className="delete-btn" onClick={() => {this.deletePayment(card.id)}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div>
            )
        })
        return (
            <div>
                { cardlist }
                <AddPayment addPayment={this.addPayment}/>
            </div>
        )
    }

}


export default PaymentOptions;