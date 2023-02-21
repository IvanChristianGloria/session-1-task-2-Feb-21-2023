import React from 'react'

const Display = ({d}) => {
    let total = 0;
    const receipt = d.map(({id, product_name, price, quantity}) => {
        total = total + (price * quantity)
        return (
        <tr key={id}>
            <td>{product_name}</td>
            <td>{quantity}</td>
            <td style={{textAlign: "right"}}>₱{price * quantity}</td>
        </tr>)
    })
    const total_row = <tr><td><b>Total</b></td><td></td><td style={{textAlign: "right", borderTop: "1px solid black"}}>${total}</td></tr>
    return(
        <table style={{width: "300px"}}>
            <thead>
                <tr>
                    <th style={{textAlign: "left"}}>Product</th>
                    <th style={{textAlign: "left"}}>Quantity</th>
                    <th style={{textAlign: "right"}}>Price</th>
                </tr>
            </thead>
            <tbody>
                {receipt}{total_row}
            </tbody>
        </table>
    )
}

export default Display