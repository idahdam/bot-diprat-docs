import React from 'react'
import { SocialContainer, SocialWrapper, SocialsHeader, SocialLink, SocialLogoWrapper } from './socials.components';
import { FaTwitter } from 'react-icons/fa';

const Socials = () => {
    return(
        <>
            <SocialContainer>
                <SocialsHeader>
                    > Socials
                </SocialsHeader>
                <SocialWrapper>
                    <SocialLogoWrapper><FaTwitter/></SocialLogoWrapper>
                    <SocialLink href="https://twitter.com/idahdam">Twitter</SocialLink>
                </SocialWrapper>
                <br/><br/><br/><br/>
            </SocialContainer>
        </>
    )
}

export default Socials;