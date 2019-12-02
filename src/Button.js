import React from 'react';
const Button=(props)=>
{
     return(<div><button onClick={props.onClick} style={{background:'blue',color:'black'}}>Click Me!</button></div>)
}
export default Button;