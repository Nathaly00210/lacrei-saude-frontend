import { ReactNode } from 'react'

type LinkProps = {
  children: ReactNode
}

export default function Link({ children }: LinkProps) {
  return <a>{children}</a>
}