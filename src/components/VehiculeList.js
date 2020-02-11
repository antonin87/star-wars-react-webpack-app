import React from 'react';
import VehiculeItem from './VehiculeItem';

const VehiculeList = ({vehicules, onAddItem, onRemoveItem, cardVehicules}) => {
  const vehiculeItems = vehicules.map((v, index) => {
        return (
           <React.Fragment key={index}>
                <VehiculeItem 
                    vehicule={v} 
                    cardVehicules={cardVehicules}
                    onAddItem={onAddItem} 
                    onRemoveItem={onRemoveItem} 
                />
            </React.Fragment>
        );
    })
    return vehiculeItems
}

export default VehiculeList;