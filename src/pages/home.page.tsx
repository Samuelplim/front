import { ButtonNav } from "../components/buttonNav";

export const HomePage = () => {
  return (
    <>
      <main className="bg-dark-400 px-10 h-screen justify-center items-center">
        <nav className="flex gap-6">
          <ButtonNav title="sobre" />
          <ButtonNav title="redes sociais" />
          <ButtonNav title="grupós regionais" />
        </nav>
      </main>
    </>
  );
};
