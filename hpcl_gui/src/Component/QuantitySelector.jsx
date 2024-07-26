import React, { useState } from 'react';

const QuantitySelector = ({ initialQuantity = 1, minQuantity = 1, maxQuantity = 10, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrease = () => {
    if (quantity > minQuantity) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button type="button" onClick={handleDecrease} disabled={quantity === minQuantity} style={{ marginRight: '10px' }}>
        -
      </button>
      <input 
        type="number" 
        value={quantity} 
        readOnly 
        style={{ width: '50px', textAlign: 'center' }}
      />
      <button type="button" onClick={handleIncrease} disabled={quantity === maxQuantity} style={{ marginLeft: '10px' }}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
