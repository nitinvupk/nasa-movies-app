import React from "react";
import Carousel from "react-multi-carousel";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectMovie } from "../redux/reducer/moviesSlice";
import { responsive } from "../utils";

const MovieList = ({moviesData}) => {
    const dispatch = useDispatch()
    console.log("movies list",moviesData)
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
                  <button onClick={()=>dispatch(selectMovie(item))}>
                <div key={i} className="row m-md-3 m-0 px-1">
                  <div className="col-12 px-0 mb-5" style={{margin:"0 auto"}}>
                    <img
                      alt="avtar"
                      src="https://picsum.photos/200/300"
                      className="img-fluid"
                    />
                    {/* <p
                      style={{ textAlign: "left" }}
                      className="card-text m-3 my-2"
                    >
                      {item.poster_path}
                    </p>
                    <h1 className="card-title-text m-3 my-3 text-left">
                      {item.original_title}
                    </h1> */}
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
  