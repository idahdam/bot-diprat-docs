import React from 'react';
import { Container, Button } from '../../globalStyles';
import { Data } from './data.js'

const Home = () => {
    return (
        <>
        	<Container>
        	<br/>
       			Site in the making. {Data.body}
        	</Container>
        	<br/>
        	<Button>{Data.button}</Button>
        </>
    )
}

export default Home;