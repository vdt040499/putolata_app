import React from "react";
import addtocart from "../../assets/img/Image 16.png";
import right from "../../assets/img/Image 9 -1.png";
import left from "../../assets/img/Image 9.png";
import "./style.css";

const SpecialProduct = ({ title, image, price, rating }) => {
  return (
    <div className="specialproduct">
      <img src={left} alt="" className="left-right" />
      <div className="specialproduct__info">
        {/* <div className="specialproduct__addbutton">
          <button className="specialproduct__add">
            <img className="addbutton" src={addtocart} alt="" />
          </button>
        </div> */}
        {/* <img src={imgspecialproduct} alt="" className="specialproduct__img"/> */}
        <div className="specialproduct__img">
          <img src={image} alt="" className="img_special" />
        </div>
        <p className="specialproduct__title">{title}</p>
        <p className="specialproduct__price">{price} VNĐ</p>
      </div>
      <img src={right} alt="" className="left-right" />
    </div>
  );
};

export default SpecialProduct;
