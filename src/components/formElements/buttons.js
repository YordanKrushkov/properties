import React from 'react';


const ButtonsField=(className,type,name, id, text, req)=>{

return (
    <div className={className}>
        <label htmlFor={id}>{text}</label>
        {req ?<input required type={type} name={name} id={id}/>
        : <input type={type} name={name} id={id}/>}
    
    </div>
    
)   
}

export default ButtonsField