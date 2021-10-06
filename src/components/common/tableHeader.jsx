const TableHeader = (props) => {
const {onSort,sortColumn,columns}=props;
    const raiseColumn=(path)=>{
        let sort={...sortColumn}
        if(sort.path === path){
            sort.order=sort.order === 'asc'?'desc':'asc';
        }else{
            sort.path=path;
            sort.order='asc';
        }
        onSort(sort);
    }
    function renderSortIcon(column){
        if(column.path!== sortColumn.path) return null;
        if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"/>;
        return <i className="fa fa-sort-desc"/>;
    }
    return ( <>
        <thead>
            <tr className="clickable">
                {columns.map(c=>{ return <th key={c.path || c.key}onClick={()=>raiseColumn(c.path)}>{c.label} {renderSortIcon(c)}</th>})}
            </tr>
        </thead>
    </> );
}
 
export default TableHeader;