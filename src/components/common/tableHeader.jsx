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
    return ( <>
        <thead>
            <tr>
                {columns.map(c=>{ return <th key={c.path || c.key}onClick={()=>raiseColumn(c.path)}>{c.label}</th>})}
            </tr>
        </thead>
    </> );
}
 
export default TableHeader;