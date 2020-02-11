import React, { Component } from 'react';

class VehiculeItem extends Component {
    state = {
        isActive: false,
        price: 0,
    }

    showDetails(e) {
        const extraInfosSelectors = document.querySelectorAll('.vehicule .extra-infos');
        const extraInfoTarget = e.target.nextSibling;
        extraInfosSelectors.forEach((selector) => selector.classList.remove('active'));
        extraInfoTarget.classList.add('active');
    }

    addCard(vehicule) {
        const extraInfosSelectors = document.querySelectorAll('.vehicule .extra-infos');
        extraInfosSelectors.forEach((selector) => selector.classList.remove('active'));
        this.props.onAddItem(vehicule);
    }

    removeCard(vehicule) {
        const extraInfosSelectors = document.querySelectorAll('.vehicule .extra-infos');
        extraInfosSelectors.forEach((selector) => selector.classList.remove('active'));
        this.props.onRemoveItem(vehicule);
    }

    render() {
        const { vehicule, cardVehicules } = this.props;
        let alreadyReserved = cardVehicules.some(v => v.name === vehicule.name);
        let removeButton = (
            <li><button onClick={ (e) => this.removeCard(vehicule)}>Annuler ma réservation</button></li>
        );
        let reservedButton = (alreadyReserved === false) ? (
            <li><button onClick={ (e) => this.addCard(vehicule)}>Reserver</button></li>
        ) : (
            <li><button disabled>Déja réservé</button></li>
        );
        
        if (vehicule.cost_in_credits === 'unknown') {
            reservedButton = <li>Ce véhicule n'est pas disponible à la location</li>;
            removeButton = null;
        }
        return (
            <ul className="vehicule" >
                <li><img src="http://localhost:8080/images/ship.jpg" /></li>
                <li>Name : {vehicule.name}</li>
                <li>Price : <strong>{vehicule.cost_in_credits}</strong></li>
                <li>Model : {vehicule.model}</li>
                <li>Capacity : {vehicule.passengers}</li>
                <li className="details">
                    <button onClick={ (e) => this.showDetails(e)}>Show Details</button>
                    <ul className="extra-infos">
                        <li>Length : {vehicule.length}</li>
                        <li>Max Atmosphering speed : {vehicule.max_atmosphering_speed}</li>
                        <li>Crew : {vehicule.crew}</li>
                        <li>Cargo capacity : {vehicule.cargo_capacity}</li>
                        <li>consumables : {vehicule.consumables}</li>
                        <li>Vehicle class : {vehicule.vehicle_class}</li>
                        <li>Manufacturer : {vehicule.manufacturer}</li>
                        {reservedButton}
                        {removeButton}
                    </ul>
                </li>
           </ul>
        )
    }


}

export default VehiculeItem;