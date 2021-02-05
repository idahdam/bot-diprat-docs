import React, { useState } from 'react'
import { Container } from '../../globalStyles'
import { SectionBlockquoteExpl, SectionRouter, SectionContainer, SectionHeader, SectionViewAllButton, SectionContainerBody, SectionBodyCommand, SectionBodyExpl } from './info.elements'

const Section = ({data}) => {
    return(
        <>
            <SectionContainer>
                <SectionHeader>
                    > F.A.Q.  
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