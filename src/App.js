import React,{useState} from 'react';
import "./App.css";
import { moviesData } from './Component/moviesData';
import AddMovie from './Component/AddMovie';
import MovieList from './Component/MovieList';
import Filter from './Component/Filter';



const App = () => {
const [movies,setMovies]=useState(moviesData);

const [search,setSearch]=useState("");
const Add = (newmovie) =>{
  setMovies ([...movies,newmovie])
};
  return (
    <div>
      <div className="navigation" >
    <Filter setSearch={setSearch} />
     <MovieList movies={movies} search={search} />
     </div>
     <AddMovie Add={Add}/> 
    </div>
  );
};

export default App


