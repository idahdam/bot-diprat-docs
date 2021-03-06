import React from 'react'
import { BannerImage, BannerText, BannerButton, BannerHeading, BannerDesc } from './banner.elements';

const Banner = ({data}) => {
    return(
        <>
            <BannerImage>
                <BannerText>
                    <BannerHeading>
                        {data.title}
                    </BannerHeading>
                    <BannerDesc>
                        {data.body}
                    </BannerDesc>
                    <BannerButton>
                        {data.button}
                    </BannerButton>
                </BannerText>
            </BannerImage>
        </>
    );
}

export default Banner;
