import React from "react";
import Carousel from "react-multi-carousel";
import { useDispatch } from "react-redux";
import { selectMovie } from "../redux/reducer/moviesSlice";
import { responsive } from "../utils";

const MovieList = ({ moviesData }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="row mx-0 my-3 mb-5 mt-md-5">
        <div className="col-12 px-0" style={{ position: "relative" }}>
          <Carousel
            draggable={true}
            infinite={true}
            dotListClass="custom-dot-list-style"
            responsive={responsive}
            autoPlay={true}
            showDots={false}
          >
            {moviesData.map((item, i) => (
              item.poster_path &&
              <button
                key={i}
                onClick={() => dispatch(selectMovie(item))}
                className="btn-cls bg-black"
              >
                <div
                  key={i}
                  className="m-0"
                  style={{ BackgroundColor: "black" }}
                >
                  <div className="px-0 mb-5" style={{ margin: "0 auto" }}>
                    <img
                      alt="avtar"
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      className="img-fluid"
                      style={{ height: "350px" }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default MovieList;
