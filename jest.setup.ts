import '@testing-library/jest-dom'

jest.mock('next/font/google', () => ({
  Nunito: () => ({
    className: 'mocked-font',
  }),
}))