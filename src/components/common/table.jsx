import TableHeader from './tableHeader'
import TableBody from './tableBody'
const Table=({columns,onSort,allMovies,sortColumn})=>{

    return( <table className="table">
            <TableHeader 
            columns={columns}
            onSort={onSort}
            sortColumn={sortColumn}/>
            <TableBody data={allMovies} 
           columns={columns}/>
        </table>);
}
export default Table;