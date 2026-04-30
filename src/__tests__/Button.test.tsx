import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/Button'

test('renderiza o botão com texto', () => {
  render(<Button>Clique aqui</Button>)
  expect(screen.getByText('Clique aqui')).toBeInTheDocument()
})

test('executa ação ao clicar', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Clique</Button>)

  fireEvent.click(screen.getByText('Clique'))
  expect(handleClick).toHaveBeenCalled()
})