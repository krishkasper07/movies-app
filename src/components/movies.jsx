import { getMovies } from "../services/fakeMovieService"; 
import { useState } from "react"; 
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";
import PropTypes from "prop-types"
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import { useEffect } from "react";

export const Movies=()=>{
    //state for movies
    const [movies,setmovies]=useState([]);
    //state for pageSize no of movies to be listed 
    const [pageSize]=useState(4);
    //state to reference the current page
    const [currentPage,setCurrentPage]=useState(1);
    //state to genre of movies
    const [genre,setGenre]=useState([]);

    const [selectedGenre,setSelectedGenre]=useState([])

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
    }
    useEffect(() => {
        const mov=getMovies();
        const gen=getGenres();
        setmovies(mov)
        setGenre(gen);
    }, [])
// importing paginate from utils 
const allMovies=paginate(movies,currentPage,pageSize);
    //object destructing 
    const {length:count}=movies
    if(count ===0)
    return <p>there are no movies in the database</p>
return(<div>
   <p className="badge bg-primary rounded">showing {count} movies in the database</p>
    <div className="row">
        <div className="col-2">
        <ListGroup items={genre}
        onItemSelect={handleGenreSelect}
        selectedItem={selectedGenre}/>
        </div>
        <div className="col">
        <table className="table">
            <thead>
            <tr>
                <th>title</th>
                <th>genre</th>
                <th>stock</th>
                <th>rating</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {allMovies.map(movie=>
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like liked={movie.liked}onLike={()=>handleLike(movie)}/></td>
                    <td><button className="btn btn-danger btn-sm" 
                    onClick={()=>handleDelete(movie)}>Delete</button></td>
                </tr>)
                }
            </tbody>
        </table>
        <Pagination 
        itemCount={count} 
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
