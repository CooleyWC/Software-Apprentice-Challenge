import {useEffect, useState} from 'react';
import AdFilter from './AdFilter';
import AdCard from './AdCard';
import PLATFORM_KEY_MAP from './platformKeyMap';

const ADS_URL = "http://localhost:3000/fakeDataSet"

function AdView() {

    const [cardData, setCardData] = useState([])
    const [campSearch, setCampSearch] = useState('')
    const [sortSpend, setSortSpend] = useState(null)
    
    useEffect(()=>{
        fetch(ADS_URL)
        .then(res=>res.json())
        .then(data=>{
            const googleAnalytics = data["google_analytics"]
            const formattedFB = formatAds(data["facebook_ads"], "facebook_ads", googleAnalytics)
            const formattedTW = formatAds(data["twitter_ads"], "twitter_ads", googleAnalytics)
            const formattedSC = formatAds(data["snapchat_ads"], "snapchat_ads", googleAnalytics)
            setCardData(prev=>prev.concat(formattedFB, formattedTW, formattedSC))
        })
    }, [])

    function formatAds(adData, platform, googleAnalytics){
        const ads = adData
        const keys = PLATFORM_KEY_MAP[platform]
        
        const formattedAd = ads.map(ad=>{
            const matchingGoogleResults = googleAnalytics.filter(analitic=>
                ad[keys.campaign].toLowerCase().includes(analitic.utm_campaign.toLowerCase().split(' ')[0]) &&
                ad[keys.adset].toLowerCase().includes(analitic.utm_medium.toLowerCase().split(' ')[0]) &&
                ad[keys.creative].toLowerCase().includes(analitic.utm_content.toLowerCase().split(' ')[0])
            ) 

            const extractResults = matchingGoogleResults.map((result)=>{
                return result.results
            })

            return {
                id: `${platform}-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
                campaign: ad[keys.campaign],
                adset: ad[keys.adset],
                creative: ad[keys.creative],
                spend: ad[keys.spend],
                impressions: ad[keys.impressions],
                clicks: ad[keys.clicks],
                results: extractResults,
                platform: platform
            }
        })
        return formattedAd
    }

    const handleSearchChange = (e) => {
        setCampSearch(e.target.value)
    }

    const handleAsc = () =>{
        setSortSpend('asc')
    }

    const handleDesc = () =>{
        setSortSpend('desc')
    }

    const handleClear = () =>{
        setCampSearch('')
        setSortSpend(null)
    }

    const filteredAds = cardData.filter((ad)=>{
        if(campSearch === ''){
            return true
        }
        return ad.campaign.toLowerCase().includes(campSearch.toLowerCase())
    })

    const sortedSpend = filteredAds.sort((a, b)=>{
        if(sortSpend === 'asc'){
            return a.spend - b.spend
        } else if(sortSpend === 'desc'){
            return b.spend - a.spend
        } else {
            return 0
        }
    })


    return (
        <div>
            <h1>AdView</h1>
            <AdFilter 
                campSearch={campSearch}
                handleSearchChange={handleSearchChange}
                handleAsc={handleAsc}
                handleDesc={handleDesc}
                handleClear={handleClear}
            />
            <div className='grid grid-cols-1 gap-2 mx-4'>
            {sortedSpend.map(ad=>(
                <AdCard 
                    key={ad.id}
                    campaign={ad.campaign}
                    adset={ad.adset}
                    creative={ad.creative}
                    spend={ad.spend}
                    impressions={ad.impressions}
                    clicks={ad.clicks}
                    results={ad.results}
                />
            ))}
            </div>
        </div>
    );
}

export default AdView;