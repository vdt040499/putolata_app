import React, { useState } from "react";

import "./style.css";

const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);

  const { _id, name, price, img } = props.cartItem;

  const onQuantityIncrement = () => {
    setQty(qty + 1);
    props.onQuantityInc(_id, qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDec(_id, qty - 1);
  };

  return (
    <tr>
      <td>{props.cartIndex + 1}</td>
      <td>
        <img src={img} alt="Product" className="cartitem__img" />
      </td>
      <td>{name}</td>
      <td>
        <button onClick={onQuantityDecrement} className="minus">
          -
        </button>
        {qty}
        <button onClick={onQuantityIncrement} className="plus">
          +
        </button>
      </td>
      <td>{price} VNĐ</td>
      <td>
        <button
          onClick={() => props.onRemoveCartItem(_id)}
          className="removebutton"
        >
          x
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
