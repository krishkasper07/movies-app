import _ from "lodash";
const Pagination = props => {
  const { itemCount,pageSize,onPageChange,currentPage}=props;
const pagesCount=Math.ceil(itemCount /pageSize);
const pages=_.range(1,pagesCount+1);
if(pagesCount === 1) return null;
    return ( <nav><ul className="pagination">
    {pages.map(page=>{
     return <li 
     key={page} 
     className={page === currentPage ? "page-item active" :"page-item"}>
       <a className="page-link" style={{cursor:"pointer"}} onClick={()=>onPageChange(page)}>{page}
       </a>
       </li>
    })}
  </ul> 
  </nav>);
}
 
export default Pagination;