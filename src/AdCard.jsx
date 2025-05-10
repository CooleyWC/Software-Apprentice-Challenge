import React from 'react';

function AdCard({
    campaign,
    adset,
    creative,
    spend,
    impressions,
    clicks,
    results,
}) {
    return (
        <div 
            className='border border-solid shadow-md'
        >
            <div className='p-4 m-4'>
                <h1 className='text-xl'>Campaign: {campaign}</h1>
                <h2>Ad Set: {adset}</h2>
                <h3>Creative: {creative}</h3>
                <p>Spend: {spend}</p>
                <p>Impressions: {impressions}</p>
                <p>Clicks: {clicks}</p>
                <div>
                    <h5>Google Results:</h5>
                    {results.map((result, index)=>(
                        <p key={index}>{result}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdCard;