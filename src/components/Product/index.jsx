import React from "react";
import addtocart from "../../assets/img/Image 16.png";
import "./style.css";

function Product({ title, image, price, discount, sold }) {
  return (
    <div className="product">
      <div className="product__info">
        <div className="product__addbutton">
          {/* <button className="product__add">
            <img className="addbutton" src={addtocart} alt="" />
          </button> */}
        </div>
        {/* <img src={imgproduct} alt="" className="product__img"/> */}
        <div className="product__img">
          <img src={image} alt="" className="img" />
        </div>
        <p className="product__title">{title}</p>
        {discount ? (
          <>
            <span className="product__fakeprice">{price} VND</span>
            <span className="product__price">
              {price - (discount * price) / 100} VND
            </span>
          </>
        ) : (
          <span className="product__price">{price} VND</span>
        )}
        {sold && <span className="product__sold">{sold} đã bán</span>}
      </div>
    </div>
  );
}

export default Product;
