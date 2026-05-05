'use client'

import styled from "styled-components"
import Link from "next/link"
import { Nunito } from "next/font/google"

const Container = styled.header`
    width: 100%;
    padding: 16px 32px;
    background: #FFFFFF;
    color: #2D2D2D;

    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 16px;
    }
`

const StyledLink = styled(Link)`
    color: #2D2D2D;
    text-decoration: none;     
    cursor: pointer;

    &:focus {
        outline: 2px solid white;
    }
    
    &:hover {
    color: #018762;
}
`

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;

  background: linear-gradient(90deg, #008392, #00BC86);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: 700;
`;

const LogoText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #018762;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;


export default function Header() {
    return (
        <Container>
            <Link href="/" aria-label="Ir para página inicial"><Logo>
                <LogoIcon className={nunito.className}>LS</LogoIcon>
                <LogoText className={nunito.className}>
                    Lacrei Saúde
                </LogoText>
            </Logo></Link>

            <Nav aria-label="Navegação principal">
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/sobre">Sobre</StyledLink>
                <StyledLink href="/contato">Contato</StyledLink>
            </Nav>
        </Container>
    )
}