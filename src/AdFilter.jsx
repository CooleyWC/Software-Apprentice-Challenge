import React from 'react';

function AdFilter({
    handleSearchChange, 
    campSearch, 
    handleAsc, 
    handleDesc,
    handleClear

}) {
    return (
        <div className='border solid p-6 mb-4 flex flex-row gap-2'>
            <div className='flex items-center gap-2'>
                <label>Search Campaign</label>
                <input 
                    className='border p-2 rounded-sm'
                    placeholder=' Enter Campaign Name'
                    value={campSearch}
                    onChange={handleSearchChange}
                />
            </div>
            <button
                className='border p-2 rounded-sm hover:bg-slate-100 transition duration-200 ease-in-out'
                onClick={handleAsc}
            >Sort by Spend Ascending</button>
            <button
                className='border p-2 rounded-sm hover:bg-slate-100 transition duration-200 ease-in-out'
                onClick={handleDesc}
            >Sort by Spend Descending</button>
            <button 
                className='border p-2 rounded-sm hover:bg-red-600 hover:text-white transition duration-200 ease-in-out'
                onClick={handleClear}
            >Clear</button>
        </div>
    );
}

export default AdFilter;