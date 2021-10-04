import Like from "./common/like";
const MoviesTable = (props) => {
    const {allMovies,onDelete,onLike,onSort}=props;
    return ( <>
         <table className="table">
            <thead>
            <tr>
                <th onClick={()=>onSort("title")}>title</th>
                <th onClick={()=>onSort("genre.name")}>genre</th>
                <th onClick={()=>onSort("numberInStocks")}>stock</th>
                <th onClick={()=>onSort("dailyRentalRate")}>rating</th>
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
                    <td><Like liked={movie.liked}onLike={()=>onLike(movie)}/></td>
                    <td><button className="btn btn-danger btn-sm" 
                    onClick={()=>onDelete(movie)}>Delete</button></td>
                </tr>)
                }
            </tbody>
        </table>
    </> );
}
 
export default MoviesTable;