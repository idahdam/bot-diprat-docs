import React, { useState } from 'react';
import { Section, Banner, CommandsComponent } from '../../components';
import { BannerData, Math, Routes } from './data'

const Home = () => {
    const [bannerData, setBannerData] = useState(BannerData);
    return (
        <>
			<Banner data={bannerData}/>	
            <CommandsComponent routes={Routes} math={Math}/>
        </>
    )
}

export default Home;