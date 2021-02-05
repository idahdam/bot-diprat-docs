import React, { useState } from 'react';
import Banner from '../../components/banner/banner';
import { BannerData } from './data'

const Home = () => {
    const [bannerData, setBannerData] = useState(BannerData);
    return (
        <>
			<br/>
			<Banner data={bannerData}/>			
        	<br/>
        </>
    )
}

export default Home;