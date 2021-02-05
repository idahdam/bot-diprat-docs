import React, { useState } from 'react'
import { Container } from '../../globalStyles'
import { SectionContainer, SectionHeader, SectionBody, SectionContainerBody, SectionBodyCommand, SectionBodyExpl } from './section.elements'

const Section = ({data}) => {
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    return(
        <>
            <Container>
                <SectionContainer>
                    <SectionHeader>Hello dad</SectionHeader>
                    <SectionContainerBody>
                        {data.map((data, index) => {
                            console.log(index)
                            console.log(data)
                            return(
                                <>
                                <SectionBodyCommand key={index}>{data.command}</SectionBodyCommand>
                                <SectionBodyExpl key={index}>{data.expl}</SectionBodyExpl>
                                </>
                            )
                        })}
                    </SectionContainerBody>
                </SectionContainer>
                <br/><br/><br/><br/>
            </Container>
        </>
    )
}

export default Section;