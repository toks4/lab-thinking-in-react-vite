import React from 'react'

function ProductRow({product}) {
  return (
    
       <tr>
                <td style={!product.inStock ? {color: 'red'}: {color:'white'}}>{product.name}</td>
                <td>{product.price}</td>
        </tr>
   
  )
}

export default ProductRow