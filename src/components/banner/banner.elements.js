import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BannerBackground from '../../images/bannerImages/banner.jpg';
import { Button } from '../../globalStyles';

export const BannerImage = styled.div`
    div{
        padding-top: 1em;
        height: 25%;
        background-image: url(${BannerBackground});
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */   
        position: relative; 
    }
`;

export const BannerText = styled.div`
    text-align: center;
    left: 50%;
    transform: translate(-50%, 0%);
    color: white;
`;

export const BannerButton = styled(Button)`
    margin-bottom: 2.75rem;
`

export const BannerHeading = styled.h1`
    padding-top: 1rem;
    font-size: 5rem;
    margin-bottom: 2rem
`

export const BannerDesc = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`