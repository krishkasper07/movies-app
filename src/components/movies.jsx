import { getMovies } from "../services/fakeMovieService"; 
import { useState } from "react"; 
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";
import PropTypes from "prop-types"
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import { useEffect } from "react";
import MoviesTable from "./moviesTable";
import _ from "lodash";

export const Movies=()=>{
    //state for movies
    const [movies,setmovies]=useState([]);
    //state for pageSize no of movies to be listed 
    const [pageSize]=useState(4);
    //state to reference the current page
    const [currentPage,setCurrentPage]=useState(1);
    //state to genre of movies
    const [genre,setGenre]=useState([]);
    
    //
    const [selectedGenre,setSelectedGenre]=useState([]);
    //state for sorting 
    const [sortColumn,setSortColumn]=useState({
        path:'title',
        order:'asc'
    })

    const handleDelete=(movie)=>{
           const newMovie=movies.filter(m=>m._id !== movie._id);
           console.log(movie)
           setmovies(newMovie);
    }
  const  handleLike=(movie)=>{
        const newMovie=[...movies];
       const index=newMovie.indexOf(movie);
       newMovie[index]={...newMovie[index]}
       newMovie[index].liked = !newMovie[index].liked;
       setmovies(newMovie);
    }

    const handlePageChange=page=>{
         setCurrentPage(page);
    }

    const handleGenreSelect=(genre)=>{
        setSelectedGenre(genre);
        setCurrentPage(1);
    }
    const handleSort=(sort)=>{
          setSortColumn(sort);
    }
    useEffect(() => {
        const gen= [{_id:'',name:'All genre'},...getGenres()];
        setmovies(getMovies());
        setGenre(gen);
    }, [])
    const filtered=selectedGenre && selectedGenre._id ? movies.filter(m=> m.genre._id === selectedGenre._id) : movies;
    // returning a sorted array using lodash
 const sorted=_.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
// importing paginate from utils 
const allMovies=paginate(sorted,currentPage,pageSize);
    //object destructing 
    const {length:count}=movies
    if(count ===0)
    return <p>there are no movies in the database</p>
return(<div>
   <p className="badge bg-primary rounded">showing {filtered.length} movies in the database</p>
    <div className="row">
        <div className="col-2">
        <ListGroup items={genre}
        onItemSelect={handleGenreSelect}
        selectedItem={selectedGenre}/>
        </div>
        <div className="col">
            <MoviesTable
            allMovies={allMovies}
            onDelete={handleDelete}
            onLike={handleLike}
            onSort={handleSort}
            sortColumn={sortColumn}/>
        <Pagination 
        itemCount={filtered.length} 
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}/>
        </div>
            </div>
    </div>
);
    }

Pagination.propTypes={
    itemCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired
}
