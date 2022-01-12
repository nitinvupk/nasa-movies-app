import React from "react";

const Banner = ({ bannerData }) => {
  return (
    <>
      <div className="container-fluid mx-0 position-relative">
        <img
          alt="avatar"
          src={bannerData.url}
          className="img-fluid opacity-none"
          style={{ height: "400px", width: "100%" }}
        />
        <h1 className="banner-text bg-black py-2">
          <span style={{ color: "red" }}>P</span>icture of the Day:{" "}
          {bannerData.date}
        </h1>
      </div>
    </>
  );
};

export default Banner;
