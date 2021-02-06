import React, { useState } from 'react';
import { Section, Banner, Infomponents } from '../../components';
import { BannerData, Command, InfoData, InfoDataHead } from './data'
import { Line } from '../../globalStyles';
const Home = () => {
    const [bannerData, setBannerData] = useState(BannerData);
    return (
        <>
			<Banner data={bannerData}/>	
            <Infomponents data={InfoData} header={InfoDataHead}/>
            <Line/>
            <Section data={Command}/>		
        </>
    )
}

export default Home;