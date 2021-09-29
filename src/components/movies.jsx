import { getMovies } from "../services/fakeMovieService"; 
import { useState } from "react"; 
export const Movies=()=>{
    const [movies,setmovies]=useState(getMovies());
    const handleDelete=(movie)=>{
           const newMovie=movies.filter(m=>m._id !== movie._id);
           console.log(movie)
           setmovies(newMovie);
    }
    const {length:count}=movies
    if(count ===0)
    return <p>there are no movies in the database</p>
return(<>
   <p className="badge  bg-primary rounded">showing {count} movies in the database</p>
    <div>
        <table className="table">
            <thead>
            <tr>
                <th>title</th>
                <th>genre</th>
                <th>stock</th>
                <th>rating</th>
            </tr>
            </thead>
            <tbody>
                {movies.map(movie=>
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button className="btn btn-danger btn-sm" 
                    onClick={()=>handleDelete(movie)}>Delete</button></td>
                </tr>)
                }
            </tbody>
        </table>
    </div>
    </>
);
    }
