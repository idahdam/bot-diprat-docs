import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';

export const SectionBackground = styled.div`

`

export const SectionHeader = styled.p`
    padding-top: 2px;
    font-size: 1.5rem;
    transform: translate(0%, 0%);
`
export const SectionBody = styled.p`
    font-size: 1.25rem;

`

export const SectionContainerBody = styled.div`
    box-sizing: border-box;
    padding: 5px;
    padding-left: 0.2rem;
    border-radius: 25px;
    border: 2px solid #101522;

    &:hover{
        box-shadow: 5px 10px;
        transition: 0.5s ease-out;
    }
`
export const SectionContainer = styled(Container)`
    box-sizing: border-box;
    width: 88%;
`

export const SectionBodyExpl = styled.p`
    font-size: 1rem;
    margin-left: 1.75rem;
`

export const SectionViewAllButton = styled(Button)`
    transform: translate(0%, 0%);
`

export const SectionRouter = styled(Link)`
    margin-left: 1rem;

    &:hover{
        background: #101522;
        color: white;
        transition: 0.5s ease-out;
    }
`

export const SectionBodyCommand = styled.blockquote`
    font-size: 1rem;
    margin-left: 1.75rem;
    color: #black;
    content: open-quote;
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
`