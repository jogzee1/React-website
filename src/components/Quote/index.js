import React from 'react'
import { Container, FormWrap, Icon, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, Text } from './QuoteElements'

const Quote = () => {
    return (
        <>
          <Container>
               <FormWrap>
                   <Icon to='/'>Timtob</Icon>
                   <FormContent>
                       <Form action="#">
                           <FormH1>Get a Quotation</FormH1>
                           <FormLabel htmlFor='for'>Email</FormLabel>
                           <FormInput type='email' required />
                           <FormLabel htmlFor='for'>Password</FormLabel>
                           <FormInput type='password' required />
                           <FormButton type='submit'>Continue</FormButton>
                           <Text>Forgot Password</Text>
                       </Form>
                   </FormContent>
               </FormWrap>
          </Container>  
        </>
    )
};

export default Quote;
