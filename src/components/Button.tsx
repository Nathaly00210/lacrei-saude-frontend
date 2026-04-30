'use client'

import styled from "styled-components"

const StyledButton = styled.button`
    background-color: teal;
    color: white;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    &:focus {
        outline: 2px solid white;
    }
`

export default function Button( {
    children,
    onClick,
}: {
    children: React.ReactNode
    onClick?: () => void
}) {
    return (
        <StyledButton onClick={onClick} aria-label="Botão de ação">
            {children}
        </StyledButton>
    )
}