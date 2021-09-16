import React from 'react';

export default function FillOptions() {
    const totalAmount = [];
    for (let i = 0; i <=12; i++) {
        totalAmount.push(i);
    }

    return (
        totalAmount.map(amount => {
            return <option value={amount}>{amount}</option>
        })
    )
}