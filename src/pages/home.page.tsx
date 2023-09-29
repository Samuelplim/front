import { ButtonNav } from "../components/buttonNav";

export const HomePage = () => {
  return (
    <>
      <main className="bg-dark-400 px-10 h-screen justify-center items-center">
        <nav className="flex gap-6">
          <ButtonNav title="sobre" />
          <ButtonNav title="redes sociais" />
          <ButtonNav title="grupos regionais" />
        </nav>
        <section>
          <p className="text-xl"> Somo a VAT - Vida Além do trabalho</p>
          <p>
            A (VAT) é mais do que apenas um movimento. Somos uma voz unida que
            ecoa em prol da dignidade no trabaalho e na justiça salarial.
          </p>
          <p>
            Nascemos da necessidade de lutar contra a opressão, a escala 6x1 e
            as jornadas de trabalho abusivas que tantos enfrentam diariamente.
          </p>
          <p>
            Nossa missão é clara: defender todos os trabalhadores, não importa
            onde estejam, quem são ou o que fazem. Acreditamos que o trabalho
            deve enriquecer vidas, não esgotá-las.
          </p>
          <p>
            Somos a revolução que desafia as normas injustas e seremos sempre a
            resistência contra a exploração
          </p>
        </section>
        <section>
          <ul>
            <p>Lutamos pelo fim da escala 6x1</p>
            <p>Pelo fim da jornada de trbalho abusiva</p>
            <p>Pela liberdade do trabalhador</p>
          </ul>
        </section>
      </main>
    </>
  );
};
