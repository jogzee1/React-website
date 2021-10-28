import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { ServiceContainer,
         ServiceH1,
         ServiceWrapper,
         ServiceCard,
         ServiceIcon,
         ServiceH2,
         ServiceP
 } from './ServicesElements';

const Services = () => {
    return (
        <ServiceContainer id='services'>
            <ServiceH1>Our Services</ServiceH1>
                <ServiceWrapper>
                    <ServiceCard>
                        <ServiceIcon src={Icon1}></ServiceIcon>
                            <ServiceH2>Reduce Expenses</ServiceH2>
                            <ServiceP>We help reduce your fees and increase your overall revenue</ServiceP>
                    </ServiceCard>

                    <ServiceCard>
                        <ServiceIcon src={Icon2}></ServiceIcon>
                            <ServiceH2>Reduce Expenses</ServiceH2>
                            <ServiceP>We help reduce your fees and increase your overall revenue</ServiceP>
                    </ServiceCard>

                    <ServiceCard>
                        <ServiceIcon src={Icon3}></ServiceIcon>
                            <ServiceH2>Reduce Expenses</ServiceH2>
                            <ServiceP>We help reduce your fees and increase your overall revenue</ServiceP>
                    </ServiceCard>
                </ServiceWrapper>
            
        </ServiceContainer>
    )
}

export default Services;
