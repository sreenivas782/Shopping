import React from "react";

const Collections = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.gentsFashion;

  return (
    <div className="collectionsSection">
      <marquee direction="right">
        <h2>{title}</h2>
      </marquee>
      <div className="menImg">
        <img src={image1} alt="abc" />
        <img src={image2} alt="abc" />
        <img src={image3} alt="abc" />
        <img src={image4} alt="abc" />
        <img src={image5} alt="abc" />
        <img src={image6} alt="abc" />
      </div>
    </div>
  );
};

export default Collections;
