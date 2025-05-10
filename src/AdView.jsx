import {useEffect, useState} from 'react';

const ADS_URL = "http://localhost:3000/fakeDataSet"

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
        console.log('adData FB', adData)
        console.log('platform', platform)
        console.log('googleAnalytics', googleAnalytics)
    }

    return (
        <div>
            <h1>AdView</h1>
        </div>
    );
}

export default AdView;