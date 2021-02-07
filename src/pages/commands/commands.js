import React from 'react';
import { Banner, CommandsComponent } from '../../components';
import { BannerData, Math, FML, Random, CommandTitles, Basic } from './data'

const Home = () => {
    return (
        <>
			<Banner data={BannerData}/>	
            <CommandsComponent basic = {Basic} fml = {FML} random = {Random} math={Math} title={CommandTitles}/>
        </>
    )
}

export default Home;