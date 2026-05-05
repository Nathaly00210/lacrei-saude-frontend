'use client'

import styled from "styled-components"

const StyledButton = styled.button`
  height: 48px;
  padding: 10px 32px;
  border-radius: 8px;
  border: none;

  background-color: #018762;
  color: white;

  font-weight: 600;
  font-size: 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;

  &:hover {
    background-color: #016f55; /* levemente mais escuro */
  }

  &:active {
    background-color: #015c47;
  }

  &:focus {
    outline: 2px solid #66c2a3;
    outline-offset: 2px;
  }
`;

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