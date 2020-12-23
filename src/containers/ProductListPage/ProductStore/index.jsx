import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import { Link } from "react-router-dom";

const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under5k: 5000000,
    under10k: 10000000,
    under15k: 15000000,
    under20k: 20000000,
    under30k: 30000000,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
  }, []);

  return (
    <div>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <div className="card">
            <div className="card__header">
              <div>
                {props.match.params.slug} mobile under {priceRange[key]}
              </div>
              <button>view all</button>
            </div>
            <div style={{ display: "flex" }} className="product">
              {product.productsByPrice[key].map((product) => (
                <Link
                  style={{ display: "block" }}
                  className="product__container"
                  to={`/${product.slug}/${product._id}/p`}
                >
                  <div className="product__img">
                    <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                    />
                  </div>
                  <div className="product__info">
                    <div style={{ margin: "5px 0" }}>{product.name}</div>
                    <div>
                      <span>4.3</span>&nbsp;
                      <span>8.999.000</span>
                    </div>
                    <div className="product__price">{product.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductStore;
