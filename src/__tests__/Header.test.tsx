jest.mock('next/font/google', () => ({
  Nunito: () => ({
    className: 'mocked-font',
  }),
}))

import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

test('renderiza o header com links', () => {
  render(<Header />)

  expect(screen.getByText('Lacrei Saúde')).toBeInTheDocument()
  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('Sobre')).toBeInTheDocument()
  expect(screen.getByText('Contato')).toBeInTheDocument()
})