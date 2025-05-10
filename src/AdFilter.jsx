import React from 'react';

function AdFilter({
    handleSearchChange, 
    campSearch, 
    handleAsc, 
    handleDesc,
    handleClear

}) {
    return (
        <div className='border solid p-6 mb-4'>
            <label>Search Campaign</label>
            <input 
                className='border'
                placeholder='Enter Campaign Name'
                value={campSearch}
                onChange={handleSearchChange}
            />
            <button
                className='border'
                onClick={handleAsc}
            >Sort by Spend Ascending</button>
            <button
                className='border'
                onClick={handleDesc}
            >Sort by Spend Descending</button>
            <button 
                className='border'
                onClick={handleClear}
            >Clear</button>
        </div>
    );
}

export default AdFilter;