'use client'

import styled from "styled-components"
import Link from "next/link"
import { Nunito } from "next/font/google"

const Container = styled.header`
    width: 100%;
    padding: 16px;
    background: linear-gradient(105.43deg, #018383 14.39%, #014687 84.69%);
    color: white;

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
    color: white;
    text-decoration: none;     
    cursor: pointer;

    &:focus {
        outline: 2px solid white;
    }
`

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});


export default function Header() {
    return (
        <Container>
            <h1 className={nunito.className}>Lacrei Saúde</h1>

            <Nav aria-label="Navegação principal">
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/sobre">Sobre</StyledLink>
                <StyledLink href="/contato">Contato</StyledLink>
            </Nav>
        </Container>
    )
}