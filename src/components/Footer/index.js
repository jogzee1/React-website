import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer,
         FooterWrap,
         FooterLinksContainer,
         FooterLinksWrapper,
         FooterLinkItems,
         FooterLinkTitle,
         FooterLink,
         SocialMedia,
         SocialMediaWrap,
         SocialLogo,
         WebsiteRights,
         SocialIcons,
         SocialIconLink
 } from './FooterElements';
 import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/quote'>How it works</FooterLink>
                            <FooterLink to='/quote'>Testimonies</FooterLink>
                            <FooterLink to='/quote'>Careers</FooterLink>
                            <FooterLink to='/quote'>Investors</FooterLink>
                            <FooterLink to='/quote'>Terms of service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/quote'>How it works</FooterLink>
                            <FooterLink to='/quote'>Testimonies</FooterLink>
                            <FooterLink to='/quote'>Careers</FooterLink>
                            <FooterLink to='/quote'>Investors</FooterLink>
                            <FooterLink to='/quote'>Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/quote'>How it works</FooterLink>
                            <FooterLink to='/quote'>Testimonies</FooterLink>
                            <FooterLink to='/quote'>Careers</FooterLink>
                            <FooterLink to='/quote'>Investors</FooterLink>
                            <FooterLink to='/quote'>Terms of service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/quote'>How it works</FooterLink>
                            <FooterLink to='/quote'>Testimonies</FooterLink>
                            <FooterLink to='/quote'>Careers</FooterLink>
                            <FooterLink to='/quote'>Investors</FooterLink>
                            <FooterLink to='/quote'>Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Timtob
                        </SocialLogo>
                        <WebsiteRights>Timtob © {new Date().getFullYear()} All rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" area-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" area-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" area-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" area-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
