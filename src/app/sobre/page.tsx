import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function Sobre() {
    return (
        <main>
            <h1 className={nunito.className}>Sobre a Lacrei</h1>
            <p>
                A Lacrei Saúde conecta pessoas LGBTQIAPN+ a profissionais de saúde
                qualificados, promovendo cuidado seguro e inclusivo.
            </p>
        </main>
    )
}