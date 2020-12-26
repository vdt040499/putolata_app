import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Product/style.css";
import Product from "../Product";
function MultiItems() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="multiitems">
      <Carousel
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Product
          title="Misha Collins Famous Coloring"
          price={999.99}
          image={
            "https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg"
          }
          rating={5}
        />
        <Product
          title="Misha Collins Famous Coloring"
          price={999.99}
          image={
            "https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg"
          }
          rating={5}
        />
        <Product
          title="Misha Collins Famous Coloring"
          price={999.99}
          image={
            "https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg"
          }
          rating={5}
        />
        <Product
          title="Misha Collins Famous Coloring"
          price={999.99}
          image={
            "https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg"
          }
          rating={5}
        />
        <Product
          title="Misha Collins Famous Coloring"
          price={999.99}
          image={
            "https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg"
          }
          rating={5}
        />
        <Product
          title="Misha Collins Famous Coloring"
          price={999.99}
          image={
            "https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg"
          }
          rating={5}
        />
      </Carousel>
    </div>
  );
}

export default MultiItems;
