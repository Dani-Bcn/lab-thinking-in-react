import React from 'react'

const ProductRow = props => {
    return (
        <tr>
            {   
                !props.product.stocked ? 
                <td style={{color:"red"}}>{props.product.name}</td> :
                <td>{props.product.name}</td>
            }
                 <td>{props.product.price}</td>
        </tr>
    )
}
export default ProductRow