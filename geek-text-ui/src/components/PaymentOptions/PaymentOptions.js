import React, { Component } from 'react';
import AddPayment from './AddPayment';
import './PaymentOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class PaymentOptions extends Component {
    state = {
        cards : [],
        loading: true,
        error: null
    }

    async componentDidMount(){
        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;
        const payment = "/payments/";
        fetch(url+currentUser+payment).then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw Error("Error getting payment methods!")
            }
        }).then(cards => {
            this.setState({cards:cards, loading:false});
        }).catch(error => this.setState({error:error}))
    }

    addPayment = (card) => {
        let cards = [...this.state.cards, card];
        this.setState({
            cards: cards
        })
    }
    
    deletePayment = (id) => {
        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;
        const payments = "/payments/";
        
        if(window.confirm('Are you sure you want to permanently delete?')){
            let cards = this.state.cards.filter(card => {
                return card.id !== id
            });
            this.setState({
                cards: cards
            })
            fetch(url+currentUser+payments+id,{
                method: 'delete',
                headers: { "Content-Type": "application/json; charset=UTF-8" }
            })
        }
        
    }

    render() {
        const { cards } = this.state;
        const cardlist = cards.map(card => {
            return (
            <div className="options">
                <div key={card.id}>
                    <div>Card Name: {card.card_nickname}</div>
                    <div>Card Number: {card.card_number}</div>
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
                <AddPayment addPayment={this.addPayment} currentUser={this.props.currentUser} />
            </div>
        )
    }

}


export default PaymentOptions;