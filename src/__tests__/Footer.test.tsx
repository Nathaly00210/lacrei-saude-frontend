import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

test('renderiza o footer', () => {
  render(<Footer />)

  expect(screen.getByText(/Lacrei Saúde/i)).toBeInTheDocument()
})