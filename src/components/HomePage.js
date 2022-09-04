import React from 'react'
import Search from './Search'
import MovieList from './MovieList';
const HomePage=()=> {
    return (
        <div className="container">
           <Search />
           <MovieList/>
        </div>
    )
}
export default HomePage;
