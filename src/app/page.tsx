'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import { Nunito } from "next/font/google";
import styled from "styled-components";

const Hero = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: #018762;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  margin-top: 24px;
`;

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function Home() {
  return (
    <main>
      <Wrapper>
        <Hero>
          <HeroContent>
            <Title id="titulo-principal" className={nunito.className}>
              Bem-vindo à Lacrei Saúde
            </Title>

        <Subtitle>
          Promovendo acesso à saúde com inclusão
        </Subtitle>

      <ButtonGroup>
      <Link href="/sobre">
        <Button>Conheça mais</Button>
      </Link>

      <Button onClick={() => alert('Bem-vindo à Lacrei Saúde!')}>
        Clique aqui
      </Button>

      <Button onClick={() => window.location.href = '/contato'}>
        Entrar em contato
      </Button>
      </ButtonGroup>

          </HeroContent>
        </Hero>
      </Wrapper>
    </main>
  )
}
