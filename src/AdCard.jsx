import React from 'react';

function AdCard({
    campaign,
    adset,
    creative,
    spend,
    impressions,
    clicks,
    results,
    platform
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
                    <p>Results:</p>
                    {results.map((result, index)=>(
                        <p key={index} className='pl-2'>{result}</p>
                    ))}
                </div>
                <p>Platform: {platform}</p>
            </div>
        </div>
    );
}

export default AdCard;