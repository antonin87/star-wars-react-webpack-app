import React from 'react';

const Card = ({items}) => {
    let total = 0;
    items.map(i => {
         total += +i.cost_in_credits
        return total;
    })
    const totalCredit = total > 0 ? (
        <p>Card : {total} Crédit Galactique Républicain</p>
    ) : null;
    return (
    <div className="card">
        <p>Card : {items.length} Items</p>
        {totalCredit}
        </div>
    )
}

export default Card;