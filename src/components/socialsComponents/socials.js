import React from 'react'
import { 
    SocialContainer, 
    SocialWrapper, 
    SocialsHeader, 
    SocialLink, 
    SocialLogoWrapper,
    SocialCol,
    SocialRow
}   from './socials.components';
import { FaTwitter, FaLinkedinIn, FaTrello } from 'react-icons/fa';

const Socials = () => {
    return(
        <>
            <SocialContainer>
                <SocialsHeader>
                    > Socials
                </SocialsHeader>
                <SocialWrapper>
                    <SocialRow>
                        <SocialCol>
                            <SocialLogoWrapper><FaTwitter/></SocialLogoWrapper>
                            <SocialLink href="https://twitter.com/idahdam">Twitter</SocialLink>
                        </SocialCol>
                        <SocialCol>
                            <SocialLogoWrapper><FaLinkedinIn/></SocialLogoWrapper>
                            <SocialLink href="https://www.linkedin.com/in/idahdam/">LinkedIn</SocialLink>
                        </SocialCol>
                        <SocialCol>
                            <SocialLogoWrapper><FaTrello/></SocialLogoWrapper>
                            <SocialLink href="#">Trello</SocialLink>
                        </SocialCol>
                    </SocialRow>
                </SocialWrapper>
                <br/><br/><br/><br/>
            </SocialContainer>
        </>
    )
}

export default Socials;