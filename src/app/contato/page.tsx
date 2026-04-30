import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function Contato() {
    return (
        <main>
            <h1 className={nunito.className}>Contato</h1>
            <p>Entre em contato conosco para mais informações.</p>
        </main>
    )
}