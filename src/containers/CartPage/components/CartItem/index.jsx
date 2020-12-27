import React, { useState } from "react";
import { generatePublicUrl } from "../../../../urlConfig";
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
    // <div className="cartItemContainer">
    //   <div className="flexRow">
    //     <div className="cartProImgContainer">
    //       <img src={generatePublicUrl(img)} alt={""} />
    //     </div>
    //     <div className="cartItemDetails">
    //       <div>
    //         <p>{name}</p>
    //         <p>{price} VND</p>
    //       </div>
    //       <div>Delivery in 3 - 5 days</div>
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       margin: "5px 0",
    //     }}
    //   >
    //     {/* quantity control */}
    //     <div className="quantityControl">
    //       <button onClick={onQuantityDecrement}>-</button>
    //       <input value={qty} readOnly />
    //       <button onClick={onQuantityIncrement}>+</button>
    //     </div>
    //     <button className="cartActionBtn">save for later</button>
    //     <button
    //       className="cartActionBtn"
    //       onClick={() => props.onRemoveCartItem(_id)}
    //     >
    //       Remove
    //     </button>
    //   </div>
    // </div>
    <tr>
      <td>{props.cartIndex + 1}</td>
      <td>
        <img src={generatePublicUrl(img)} alt="Product" className="cartitem__img" />
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
