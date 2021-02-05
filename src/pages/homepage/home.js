import React, { useState } from 'react';
import { Section, Banner, Infomponents } from '../../components';
import { BannerData, Command, InfoData } from './data'
import { Line } from '../../globalStyles';
const Home = () => {
    const [bannerData, setBannerData] = useState(BannerData);
    return (
        <>
			<Banner data={bannerData}/>	
            <Infomponents data={InfoData}/>
            <Line/>
            <Section data={Command}/>		
        </>
    )
}

export default Home;