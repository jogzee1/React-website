import React from 'react'
import { TopSectionContainer, LeftContent, RightContent, Title, Slogan, IntroContainer, Intro, RowContainer } from './TopSectionElements';

const TopSection = () => {
    return (
        <TopSectionContainer>
            <RowContainer>
            <LeftContent><Slogan>LET US BUILD YOUR DREAMS</Slogan></LeftContent>
            <RightContent>
                <Title>WEB & MOBILE DEVELOPMENT</Title>
            </RightContent>
            </RowContainer>
            
            <IntroContainer>
                <Intro>We are Dynamic ICT company that specialize in providing value added services to its clients for the purpose of achieving their goals in an ease with the use of technologies, management services and consultancy.</Intro>
            </IntroContainer>
        </TopSectionContainer>
    )
}

export default TopSection;
