import React from 'react';
 
const Search = ({setParPage,setSearchValue,searchValue}) => {
    return (
        <div className='flex justify-between items-center mb-4'>
        <select onChange={(e) => setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-green-500 outline-none bg-white border border-slate-700 rounded-md text-[#4D4D4D]'>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option> 
        </select>
        <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className='px-4 py-2 focus:border-green-500 outline-none bg-white border border-slate-700 rounded-md text-[#d0d2d6]' type="text" placeholder='Search' /> 
    </div>
    );
}; 

export default Search;