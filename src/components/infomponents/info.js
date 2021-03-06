import React from 'react'
import { SectionContainer, SectionHeader, SectionContainerBody, SectionBodyCommand, SectionBodyExpl } from './info.elements'

const Section = ({data, header}) => {
    return(
        <>
            <SectionContainer>
                <SectionHeader>
                    {header} 
                </SectionHeader>
                <SectionContainerBody>
                    {data.map((data, index) => {    
                        return(
                            <>
                            <SectionBodyCommand key={index}>{data.command}</SectionBodyCommand>
                            <SectionBodyExpl key={index}>{data.expl}</SectionBodyExpl>
                            </>
                        )
                    })}
                </SectionContainerBody>
                <br/><br/><br/>
            </SectionContainer>
        </>
    )
}

export default Section;