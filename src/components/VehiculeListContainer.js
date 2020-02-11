import React, { Component } from 'react';
import VehiculeList from './VehiculeList';
import Card from './Card';

class VehiculeListContainer extends Component {

    constructor(props) {
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    state = {
        data: [],
        items: []
    }

    componentDidMount() {
        const url = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api/vehicles';
        fetch(url)
        .then(response => response.json())
        .then(result => this.setState({data: result.results}));
    }

    handleAddItem(item) {
        this.setState({items:  [...this.state.items, item]});
    }

    handleRemoveItem(item) {
        this.setState({items: this.state.items.filter(i => i.name !== item.name)});
    }

    render() {
        const { data, items } = this.state;
        console.log(this.state.items);
        return (
            <div className="vehicule-list">
                <VehiculeList 
                    vehicules={data} 
                    cardVehicules={items}
                    onAddItem={this.handleAddItem} 
                    onRemoveItem={this.handleRemoveItem} 
                />
                <Card items={items} />
            </div>
        )
    }

}

export default VehiculeListContainer;