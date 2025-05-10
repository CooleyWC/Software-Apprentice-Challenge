import {useEffect, useState} from 'react';

const ADS_URL = "http://localhost:3000/fakeDataSet"

const PLATFORM_KEY_MAP = {
    facebook_ads: {
        campaign: "campaign_name",
        adset: "media_buy_name",
        creative: "ad_name",
        spend: "spend",
        impressions: "impressions",
        clicks: "clicks"

    },
    twitter_ads: {
        campaign: "campaign",
        adset: "ad_group",
        creative: "image_name",
        spend: "spend",
        impressions: "impressions",
        clicks: "post_clicks"
        
    },
    snapchat_ads: {
        campaign: "campaign_name",
        adset: "ad_squad_name",
        creative: "creative_name",
        spend: "cost",
        impressions: "impressions",
        clicks: "post_clicks"
    },
}

function AdView() {

    const [adData, setAdData] = useState({})
    const [cardData, setCardData] = useState([])

    useEffect(()=>{
        fetch(ADS_URL)
        .then(res=>res.json())
        .then(data=>{
            setAdData(data)
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
                id: `${platform}-${Math.floor(Math.random() * 10000)}`,
                campaign: ad[keys.campaign],
                adset: ad[keys.adset],
                creative: ad[keys.creative],
                spend: ad[keys.spend],
                impressions: ad[keys.impressions],
                results: extractResults,
                platform: platform
            }
        })
        return formattedAd
    }

    return (
        <div>
            <h1>AdView</h1>
            {cardData.map(ad=>(
                <div 
                    key={ad.id}
                    className='border border-solid '
                >
                    <h1 className='text-xl'>Campaign: {ad.campaign}</h1>
                    <h2>Ad Set: {ad.adset}</h2>
                    <h3>Creative: {ad.creative}</h3>
                    <p>Spend: {ad.spend}</p>
                    <p>Impressions: {ad.impressions}</p>
                    <div>
                        <h5>Google Results:</h5>
                        {ad.results.map((result, index)=>(
                            <p key={index}>{result}</p>
                        ))}
                    </div>
                   
                </div>
            ))}
        </div>
    );
}

export default AdView;