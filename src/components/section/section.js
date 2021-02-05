import React, { useState } from 'react'
import { Container } from '../../globalStyles'
import { SectionBlockquoteExpl, SectionRouter, SectionContainer, SectionHeader, SectionViewAllButton, SectionContainerBody, SectionBodyCommand, SectionBodyExpl } from './section.elements'

const Section = ({data}) => {
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    return(
        <>
            <SectionContainer>
                <SectionHeader>
                    > Commands
                <SectionRouter to="/commands">Show All</SectionRouter>
                </SectionHeader>
                <SectionContainerBody>
                    {data.map((data, index) => {    
                        return(
                            <>
                            <SectionBodyCommand key={index}>{data.command}<SectionViewAllButton>Show All</SectionViewAllButton></SectionBodyCommand>
                            <SectionBodyExpl key={index}>{data.expl}</SectionBodyExpl>
                            </>
                        )
                    })}
                </SectionContainerBody>
                <br/><br/>
                
                <br/><br/><br/><br/><br/>
            </SectionContainer>
        </>
    )
}

export default Section;