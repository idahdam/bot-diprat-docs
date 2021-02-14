import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const SocialsHeader = styled.p`
    padding-top: 2px;
    font-size: 1.5rem;
    transform: translate(0%, 0%);
`

export const SocialContainer = styled(Container)`
    box-sizing: border-box;
    width: 88%;
`

export const SocialRow = styled.div`
    justify-content: center;
    content: "";
    display: table;
    clear: both;
`

export const SocialCol = styled.div`
    padding: 1rem;
    float: left;
    width: 33.33%;
`

export const SocialWrapper = styled.div`
    
`

export const SocialLogoWrapper = styled.div`
    font-size: 2rem;
    transform: translate(2.5%, 5%);
`

export const SocialLink = styled.a`
    font-size: 1.5rem;
`