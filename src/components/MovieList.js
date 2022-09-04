import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieComponent from "./MovieComponent";
import { Spinner } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { getMovies } from "../Redux/action";

const MovieList = () => {
  let { movies, error, isLoading, totalResults, searchvalue, pageNum } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  /* Logic to eliminate duplicate movie records */
  const uniqueMovies = movies.filter(
    (movie, index) =>
      movies.findIndex((a) => a.imdbID === movie.imdbID) === index
  );
  const handlePageChange = (pageNumber) => {
    dispatch(getMovies(searchvalue, pageNumber));
  }
  return (
    <>
      <div className="content-container">
        {error ? (
          <p className="errormsg">Movie Not Found !!! </p>
        ) : isLoading ? (
          <Spinner animation="border" variant="success" />
        ) : (
          <>
            <div className="image-container">
              {uniqueMovies.map((movie, index) => (
                <MovieComponent movie={movie} key={movie.imdbID} />
              ))}
            </div>
            <div className="pagination_wrapper">
              <Pagination
                color="secondary"
                activePage={pageNum}
                totalItemsCount={Number(totalResults)}
                itemsCountPerPage={10}
                pageRangeDisplayed={5}
                innerClass="pagination"
                itemClass="page-item"
                linkClass="page-link"
                disabledClass="disabled"
                activeClass="active"
                onChange={handlePageChange}
              />
            </div>
          </>

        )}
      </div>
    </>
  );
};

export default MovieList;
