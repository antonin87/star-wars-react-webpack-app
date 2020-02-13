import React, { useState, useEffect } from 'react';
import VehiculeList from './VehiculeList';
import Card from './Card';

const VehiculeListContainer = () => {
    const [data, setData ] = useState([]);
    const [items, setItems ] = useState([]);

    useEffect(() => {
        const url = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api/vehicles';
        fetch(url)
        .then(response => response.json())
        .then(result => setData(result.results));
    }, []);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const handleRemoveItem = (item) => {
        setItems(items.filter(i => i.name !== item.name));
    }
    return (
        <div className="vehicule-list">
            <VehiculeList 
                vehicules={data} 
                cardVehicules={items}
                onAddItem={handleAddItem} 
                onRemoveItem={handleRemoveItem} 
            />
            <Card items={items} />
        </div>
    )
    

}

export default VehiculeListContainer;