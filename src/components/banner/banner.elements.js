import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BannerBackground from '../../images/bannerImages/banner.jpg';
import { Button } from '../../globalStyles';

export const BannerImage = styled.div`
    div{
        height: 50%;
        background-image: url(${BannerBackground});
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */   
        position: relative; 
    }
`;

export const BannerText = styled.div`
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

export const BannerButton = styled(Button)`
    margin-bottom: 2.5rem;
`

export const BannerHeading = styled.p`
    padding-top: 15rem;
    font-size: 5rem;
    margin-bottom: 2rem;
`

export const BannerDesc = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`