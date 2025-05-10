import React from 'react';

function AdFilter({handleSearchChange, campSearch}) {
    return (
        <div>
            <label>Search Campaign</label>
            <input 
                className='border'
                placeholder='Enter Campaign Name'
                value={campSearch}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default AdFilter;