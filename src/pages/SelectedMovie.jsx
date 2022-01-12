import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaImdb, FaCloudDownloadAlt } from "react-icons/fa";
import { BsQuestionLg } from "react-icons/bs";
const SelectedMovie = () => {
  const selectedMovie = useSelector((state) => state.Movies.selectMovie);
  return (
    <>
      {selectedMovie.release_date ? (
        <>
          <div
            className="mainDiv p-3"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.poster_path})`,
            }}
          >
            <div className="selectTableDiv px-4 py-3">
              <h2>
                <u>{selectedMovie.title}</u>
              </h2>
              <p className="Paragraph">What's the movie about?</p>
              <p className="Paragraph">{selectedMovie.overview}</p>
              <Table striped bordered hover>
                <thead className="tableHead">
                  <tr>
                    <th>Released</th>
                    <th>Links</th>
                    <th>Budget</th>
                    <th>Poster</th>
                    <th>Revenue</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="tableBody">
                  <tr>
                    <td>{selectedMovie.release_date}</td>
                    <td>
                    <a
                        className="anchor-tag-color"
                        href="#"
                      >
                      <FaImdb />
                      </a>
                    </td>
                    <td>
                      <BsQuestionLg />
                    </td>
                    <td>
                      <a
                        className="anchor-tag-color"
                        href={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
                        target="_blank"
                      >
                        <FaCloudDownloadAlt />
                      </a>
                    </td>
                    <td>
                      <BsQuestionLg />
                    </td>
                    <td>Released</td>
                  </tr>
                </tbody>
              </Table>
              <p className="Paragraph mb-0">
                Rating: {selectedMovie.vote_average}
              </p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SelectedMovie;
