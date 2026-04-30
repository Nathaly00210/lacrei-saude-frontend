'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function Home() {
  return (
    <main>
      <section>
        <h1 className={nunito.className}>Bem-vindo à Lacrei Saúde</h1>
        <p>Promovendo acesso à saúde com inclusão</p>

      <Link href="/sobre">
        <Button>Conheça mais</Button>
      </Link>

      <Button onClick={() => alert('Bem-vindo à Lacrei Saúde!')}>
        Clique aqui
      </Button>

      <Button onClick={() => window.location.href = '/contato'}>
        Entrar em contato
      </Button>

      </section>
    </main>
  )
}
