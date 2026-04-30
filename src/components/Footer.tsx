'use client'

import styled from "styled-components"

const Container = styled.footer`
    width: 100%;
    padding: 16px;
    background-color: #111;
    color: white;
    text-align: center;
`

export default function Footer() {
    return (
        <Container>
            <p>© 2026 Lacrei Saúde - Projeto Voluntário</p>
        </Container>
    )
}