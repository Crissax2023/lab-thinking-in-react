import React from 'react';

const ProductRow = ({ product }) => {
  const { name, price, inStock } = product;
  const rowStyle = inStock ? {} : { color: 'red' };

  return (
    <tr style={rowStyle}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
