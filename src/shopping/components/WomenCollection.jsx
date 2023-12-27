import React from "react";

const WomenCollection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.womenFashion;

  return (
    <div className="womenSection">
      <marquee direction=""><h2 id="t">{title}</h2></marquee>
      <div className="gif">
        <img src="public/assets/LadiesBanner.gif" alt="img" />
      </div>

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

export default WomenCollection;
