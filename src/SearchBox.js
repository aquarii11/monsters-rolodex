import React from 'react';
import './searchbox.style.css';
const SearchBox =(props) =>
{
	return (
             <div>
		         <input type='search' className='search' onChange={props.onChange}    placeholder='search monsters' />
		     </div>
		     )
}
export default SearchBox;