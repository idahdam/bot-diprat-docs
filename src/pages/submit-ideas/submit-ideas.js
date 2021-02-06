import React, { useState } from 'react';
import { Banner, Infomponents, SocialsComponent } from '../../components';
import { BannerData, SubmitIdeas, SubmitIdeasHeader } from './data'

const Home = () => {
    const [bannerData, setBannerData] = useState(BannerData);
    return (
        <>
			<Banner data={bannerData}/>	
            <Infomponents data={SubmitIdeas} header={SubmitIdeasHeader}/>
            <SocialsComponent/>
        </>
    )
}

export default Home;