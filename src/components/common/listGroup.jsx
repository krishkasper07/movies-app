const ListGroup = (props) => {
  const {items,onItemSelect,textProperty,valueProperty,selectedItem}=props;
    return (<>
   <ul className="list-group">
  {items.map(g=>{return <li key={g[valueProperty]} 
  className={selectedItem === g ?"list-group-item active clickable " :"list-group-item clickable"}
  onClick={()=>onItemSelect(g)} style={{color:'black'}}>{g[textProperty]}</li>})}
</ul>
    </>);
}
ListGroup.defaultProps={
  textProperty:"name",
  valueProperty:"_id"
}
 
export default ListGroup;