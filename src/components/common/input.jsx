const Input = ({name,label,onChange,value,autoFocus}) => {
    return ( <div className="mb-3">
    <label htmlFor={name} className="form-label" style={{color:'white'}}>{label}</label>
    <input 
    value={value} 
    type={name} 
    className="form-control" 
    id={name} 
    onChange={onChange}  
    name={name} autoFocus={autoFocus}/>
  </div> );
}
 
export default Input;