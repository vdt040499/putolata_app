import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions";
import { Link } from "react-router-dom";
import "./style.css";

const MenuHeader = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  // const renderCategories = (categories) => {
  //   let myCategories = [];
  //   for (let category of categories) {
  //     myCategories.push(
  //       <li key={category.name}>
  //         {category.parentId ? (
  //           <a
  //             href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
  //           >
  //             {category.name}
  //           </a>
  //         ) : (
  //           <span>{category.name}</span>
  //         )}
  //         {category.children.length > 0 ? (
  //           <ul>{renderCategories(category.children)}</ul>
  //         ) : null}
  //       </li>
  //     );
  //   }
  //   return myCategories;
  // };

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <div className="header__column">
          <div className="header__subcolumn">
            {category.parentId ? (
              <a
                className="link"
                href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
              >
                {category.name}
              </a>
            ) : (
              <div className="header__column">
                <Link to="/" className="link" className="header__subtitle">
                  {category.name}
                </Link>
                <img
                  src="https://image.freepik.com/free-photo/eastern-sweets-turkish-delight-lokum-with-nuts-top-view_114579-8401.jpg"
                  alt=""
                  className="header__columnImage"
                />
              </div>
            )}
            {category.children.length > 0 ? (
              <ul>{renderCategories(category.children)}</ul>
            ) : null}
          </div>
        </div>
      );
    }
    return myCategories;
  };

  return (
    <>
      <Link to="/" className="link">
        Sản phẩm
      </Link>
      <div className="dropdowncontent">
        <div className="header__submenu">
          {/* <ul> */}
          {category.categories.length > 0
            ? renderCategories(category.categories)
            : null}
          {/* </ul> */}
        </div>
      </div>
    </>

    // <>
    //   <Link to="/" className="link">
    //     Sản phẩm
    //   </Link>
    //   <div className="dropdowncontent">
    //     <div className="header__submenu">
    //       <div className="header__column">
    //         <Link to="/" className="link" className="header__subtitle">
    //           ĐỒ ĂN
    //         </Link>
    //         <img
    //           src="https://image.freepik.com/free-photo/eastern-sweets-turkish-delight-lokum-with-nuts-top-view_114579-8401.jpg"
    //           alt=""
    //           className="header__columnImage"
    //         />
    //       </div>

    //       <div className="header__column">
    //         <div className="header__subcolumn">
    //           <Link to="/" className="link">
    //             <i class="fas fa-atom"></i>Mứt
    //           </Link>
    //           <Link to="/" className="link">
    //             Trái cây sấy
    //           </Link>
    //           <Link to="/" className="link">
    //             Khô
    //           </Link>
    //           <Link to="/" className="link">
    //             Kẹo
    //           </Link>
    //           <Link to="/" className="link">
    //             Snack
    //           </Link>
    //           <Link to="/" className="link">
    //             Bánh ngọt
    //           </Link>
    //           <Link to="/" className="link">
    //             Ngũ cốc
    //           </Link>
    //           <Link to="/" className="link">
    //             Hạt khô
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Categories */}
    //       <div className="header__column">
    //         <Link className="link" className="header__subtitle" to="/">
    //           ĐỒ UỐNG
    //         </Link>
    //         <img
    //           src="https://image.freepik.com/free-psd/mockup-liquid-bottle-labels_53876-65817.jpg"
    //           alt=""
    //           className="header__columnImage"
    //         />
    //       </div>

    //       <div className="header__column">
    //         <div className="header__subcolumn">
    //           <Link className="link" to="/">
    //             Nước khoáng
    //           </Link>
    //           <Link className="link" to="/">
    //             Sữa
    //           </Link>
    //           <Link className="link" to="/">
    //             Tăng lực
    //           </Link>
    //           <Link className="link" to="/">
    //             Dưỡng chất
    //           </Link>
    //           <Link className="link" to="/">
    //             Nước ngọt
    //           </Link>
    //           <Link className="link" to="/">
    //             Trà
    //           </Link>
    //           <Link className="link" to="/">
    //             Trà sữa
    //           </Link>
    //           <Link className="link" to="/">
    //             Nước có ga{" "}
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default MenuHeader;
