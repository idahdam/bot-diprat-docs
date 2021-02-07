import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const CommandSideBar = styled.div`
    padding-right: 5rem;
    padding-left: 5rem;
    width: 15%,
    background: #f0f0f0;
`

export const CommandContent = styled.div`
    flex: 1;
    padding: "10px"; 
`

export const CommandContainer = styled.div`
    display: flex;
`

export const CommandUnorderedList = styled.ul`
    listStyleType: none;
    padding: 0;   
`