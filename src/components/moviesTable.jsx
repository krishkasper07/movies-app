import Like from "./common/like";
import Table from './common/table'
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
    return (
        <Table allMovies={allMovies} onSort={onSort} columns={columns} 
        sortColumn={sortColumn}/>
    );
}
 
export default MoviesTable;