import './search-box.style.css';

import React from 'react';

export const SearchBox = ({placeholder , handelChange}) => (
    <input 
    className="search"
    type='search'
     placeholder={placeholder} 
     onChange={handelChange} />
)
