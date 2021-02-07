import React from 'react';
import { Section, Banner, Infomponents } from '../../components';
import { BannerData, Command, InfoData, InfoDataHead } from './data'
import { Line } from '../../globalStyles';
const Home = () => {
    return (
        <>
			<Banner data={BannerData}/>	
            <Infomponents data={InfoData} header={InfoDataHead}/>
            <Line/>
            <Section data={Command}/>		
        </>
    )
}

export default Home;