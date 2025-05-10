import {useEffect, useState} from 'react';

const ADS_URL = "http://localhost:3000/fakeDataSet"

function AdView() {

    const [adData, setAdData] = useState({})

    useEffect(()=>{
        fetch(ADS_URL)
        .then(res=>res.json())
        .then(data=>{
            setAdData(data)
        })
    }, [])

    console.log(adData)


    return (
        <div>
            <h1>AdView</h1>
        </div>
    );
}

export default AdView;