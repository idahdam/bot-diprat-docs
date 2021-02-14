import React from 'react';
import { NotFound, Banner } from '../../components';
import { BannerData } from './data';

const NotFoundComponent = () => {
    return(
        <>
            <Banner data={BannerData}/>	
            <NotFound/>
        </>
    )
}

export default NotFoundComponent;