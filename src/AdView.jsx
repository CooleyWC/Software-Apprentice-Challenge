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

    useEffect(()=>{
        fetch(ADS_URL)
        .then(res=>res.json())
        .then(data=>{
            setAdData(data)
            const googleAnalytics = data["google_analytics"]
            formatAds(data["facebook_ads"], "facebook_ads", googleAnalytics)
        })
    }, [])


    function formatAds(adData, platform, googleAnalytics){
        const ads = adData
        const keys = PLATFORM_KEY_MAP[platform]
        
        const addGoogleResults = ads.map(ad=>{
            const matchingGoogleResults = googleAnalytics.filter(analitic=>
                ad[keys.campaign].toLowerCase().includes(analitic.utm_campaign.toLowerCase().split(' ')[0]) &&
                ad[keys.adset].toLowerCase().includes(analitic.utm_medium.toLowerCase().split(' ')[0]) &&
                ad[keys.creative].toLowerCase().includes(analitic.utm_content.toLowerCase().split(' ')[0])
            ) 
            return {
                ...ad,
                matchingGoogleResults
            }
        })
        
        console.log(addGoogleResults)

    }

    return (
        <div>
            <h1>AdView</h1>
        </div>
    );
}

export default AdView;