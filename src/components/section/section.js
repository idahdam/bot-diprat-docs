import React from 'react';
import { SectionRouter, SectionContainer, SectionHeader, SectionContainerBody, SectionBodyCommand, SectionBodyExpl } from './section.elements'

const Section = ({data}) => {
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