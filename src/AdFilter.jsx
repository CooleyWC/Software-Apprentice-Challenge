import React from 'react';

function AdFilter({handleSearchChange, campSearch, handleAsc, handleDesc}) {
    return (
        <div>
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
        </div>
    );
}

export default AdFilter;