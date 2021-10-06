const Like=({liked,onLike})=>{
    let classes="fa clickable fa-heart"
    if(!liked) classes+="-o";
    return(<i className={classes} aria-hidden="true" onClick={onLike}></i>);
}

export default Like;