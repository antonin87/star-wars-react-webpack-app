import React from 'react';

const DetailsVehicule = ({vehicule, cardVehicules}) => {
  const vehiculeItems = vehicules.map((v, index) => {
    let alreadyReserved = cardVehicules.some(v => v.name === vehicule.name);
    let removeButton = (
        <li className="add"><button onClick={ (e) => this.removeCard(vehicule)}>Annuler ma réservation</button></li>
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
        );
    })
    return vehiculeItems
}

export default DetailsVehicule;