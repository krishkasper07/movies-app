import Like from "./common/like";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
const MoviesTable = (props) => {
  const {allMovies,sortColumn,onSort,onLike,onDelete}=props;
       const columns=[
            {path:'title',label:'title'},
            {path:'genre.name',label:'genre'},
            {path:'numberInStock',label:'Stock'},
            {path:'dailyRentalRate',label:'Rate'},
            {key:'like',content:movie=><Like liked={movie.liked} onLike={()=>onLike(movie)}/>},
            {key:'delete',content:movie=><button
            onClick={()=>onDelete(movie)}className="btn btn-danger btn-sm">Delete</button>},]
    return ( <>
         <table className="table">
            <TableHeader 
            columns={columns}
            onSort={onSort}
            sortColumn={sortColumn}/>
            <TableBody data={allMovies} 
           columns={columns}/>
        </table>
    </> );
}
 
export default MoviesTable;