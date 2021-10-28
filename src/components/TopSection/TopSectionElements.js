import styled from "styled-components";

export const TopSectionContainer = styled.section`
  width: 100%;
  height:100vh;
  overflow: hidden;
  background-color: #010606;
  padding-top:200px;

  @media screen and (max-width: 768px){
    padding-top:100px;
}

@media screen and (max-width: 480px) {
    padding-top:150px;
}
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left:40px;
  padding-right:40px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
}
`;

export const LeftContent = styled.div`
  width: 40%;

  @media screen and (max-width: 480px) {
    width: 100%;
}
`;

export const RightContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
}
`;

export const Title = styled.h2`
font-size: 5rem;
line-height: 1.1;
font-weight: 600;
color: #fff;
align-items: right;
/* color ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')}; */

/* ###### Added files ###### */
position: relative;
margin-top: 30px;
margin-bottom: 30px;




:before {
  content:'';
  position: absolute;
  background-color: #01BF71;
  width: 3px;
  height: 100%;
  bottom: 0;
  left:-20px;
}

@media screen and (max-width: 768px){
    font-size: 2rem;
}

@media screen and (max-width: 480) {
    font-size: 1rem;
}
`;

export const Slogan= styled.p`
    font-size: 16px;
    line-height: 1.1;
    font-weight: 300;
    color: #fff;
    float: right;
    margin-right:30px;
    margin-top:35px;
`;

export const IntroContainer = styled.div`
  width: 50%;
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  float:right;
  margin-top:80px;
  margin-right:180px;
  
  
  

  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
    float:none;
    margin-top:50px;
    padding-right:20px;
}
`;

export const Intro = styled.p`
  font-size: 1rem;
  text-align: left;
  color:#f9f9f9;
  line-height:1.2;
  padding:0 40px;
`;