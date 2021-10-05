const Like=({liked,onLike})=>{
    let classes="fa fa-heart"
    if(!liked) classes+="-o";
    return(<i className={classes} aria-hidden="true" onClick={onLike} style={{cursor:"pointer"}} ></i>);
}

export default Like;