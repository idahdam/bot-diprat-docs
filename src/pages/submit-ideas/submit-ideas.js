import React, { useState } from 'react';
import { Section, Banner } from '../../components';
import { BannerData, Command } from './data'

const Home = () => {
    const [bannerData, setBannerData] = useState(BannerData);
    return (
        <>
			<Banner data={bannerData}/>	
            {/* <Section data = {Command}/>		 */}
        </>
    )
}

export default Home;