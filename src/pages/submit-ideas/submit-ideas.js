import React from 'react';
import { Banner, Infomponents, SocialsComponent } from '../../components';
import { BannerData, SubmitIdeas, SubmitIdeasHeader } from './data'

const Home = () => {
    return (
        <>
			<Banner data={BannerData}/>	
            <Infomponents data={SubmitIdeas} header={SubmitIdeasHeader}/>
            <SocialsComponent/>
        </>
    )
}

export default Home;