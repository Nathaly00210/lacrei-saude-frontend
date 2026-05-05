'use client'

import styled from "styled-components"

const Container = styled.footer`
    width: 100%;
    padding: 16px;
    background-color: #FFFFFF;
    color: #2D2D2D;
    text-align: center;
`

export default function Footer() {
    return (
        <Container>
            <p>© 2026 Lacrei Saúde - Projeto Voluntário</p>
        </Container>
    )
}