import React from "react";

const Banner = ({ bannerData }) => {
  console.log("banner data", bannerData);
  return (
    <>
      <div className="container mx-0" style={{ maxWidth: "100%" }}>
        <img
          alt="avatar"
          src={bannerData.hdurl}
          className="img-fluid opacity-none"
          style={{height:"400px",width:"100%"}}
        />
        <h1>Picture of the Day: {bannerData.date}</h1>
      </div>
    </>
  );
};

export default Banner;
