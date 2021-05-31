import React from 'react';
import MovieCard from "./MovieCard";
const MovieList = ({movies,search}) => {
    return (
        
            
            <div className="List">
            {
                movies
                .filter ((el)=>el.name.toLowerCase().includes(search.toLowerCase()) || el.rating ==search)
                .map ((movie,key)=> (
                    <MovieCard movie={movie} key={key} />

                ))}
            </div>
        
    )
};

export default MovieList;
