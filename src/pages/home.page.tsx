import { ButtonNav } from "../components/buttonNav";
import { Section } from "../components/section";
import TikTokVideo from "../components/tiktokVideo";

type LinkProps = {
  title: string;
  link: string;
};
navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);
  },
  function (error) {
    console.log(error);
  },
  { enableHighAccuracy: false, maximumAge: 100000, timeout: 30000 }
);
export const HomePage = () => {
  const redesSociais: LinkProps[] = [
    { title: "Instagram", link: "https://instagram.com/movimento_vat" },
    { title: "TikTok", link: "https://www.tiktok.com/@movimento_vat" },
    { title: "Twitter", link: "https://www.reddit.com/r/movimento_vat/" },
    {
      title: "WhatsApp",
      link: "https://chat.whatsapp.com/Klb3kit9NViKH3oFhdEPc8",
    },
    {
      title: "Telegram",
      link: "https://t.me/+-6FKOpL3K4diMjEx",
    },
  ];
  const tiktoksApoiadores = [
    "https://www.tiktok.com/@andressahcatty/video/7284070820505324805",
    "https://www.tiktok.com/@juru.ba/video/7286099868383317254",
    "https://www.tiktok.com/@fhelipe..medeiros/video/7285745376026529029",
    "https://www.tiktok.com/@francisquinhom/video/7285801308282621189",
    "https://www.tiktok.com/@samuelbscar/video/7285768666333891846",
    "https://www.tiktok.com/@mariicvidigal/video/7286438361747754246",
  ];
  const tiktosDepoimentos = [];

  const _renderRedesSociais = (item: LinkProps, index: number) => {
    return (
      <a
        href={item.link}
        target="_blank"
        className="bg-dark-1000 px-2 rounded-sm"
        key={index}
      >
        <p className="text-light-300 text-sm">{item.title}</p>
      </a>
    );
  };

  return (
    <main className="bg-dark-400 justify-center items-center py-4">
      <div className="px-4 my-4 bg-dark-100">
        <p>CONHEÇA NOSSAS REDES SOCIAIS</p>
        <div className="flex gap-2 mt-2">
          {redesSociais.map(_renderRedesSociais)}
        </div>
      </div>
      <Section title="Somo a VAT - Vida Além do trabalho">
        <p>
          A (VAT) é mais do que apenas um movimento. Somos uma voz unida que
          ecoa em prol da dignidade no trabalho e na justiça salarial. Nascemos
          da necessidade de lutar contra a opressão, a escala 6x1 e as jornadas
          de trabalho abusivas que tantos enfrentam diariamente.
        </p>
        <div className="mt-4">
          <p className="text-lg text-light-100">Missão</p>
          <p>
            defender todos os trabalhadores, não importa onde estejam, quem são
            ou o que fazem. Acreditamos que o trabalho deve enriquecer vidas,
            não esgotá-las.
          </p>
        </div>

        <div className="py-2">
          <p className="text-sm py-2">
            Somos a revolução que desafia as normas injustas e seremos sempre a
            resistência contra a exploração.
          </p>
          <ul>
            <li>- Lutamos pelo fim da escala 6x1</li>
            <li>- Pelo fim da jornada de trabalho abusiva</li>
            <li>- Pela liberdade do trabalhador</li>
          </ul>
        </div>
        <div className="mt-4">
          <p>APOIE A CAUSA</p>
          <p>Assine a petição publica</p>
          <a
            href="https://peticaopublica.com.br/pview.aspx?pi=BR135067"
            target="_blank"
          >
            <p className="bg-white text-black p-2 text-center">clique aqui</p>
          </a>
        </div>
      </Section>
      <Section title="Apoiadores da causa">
        <p>Conheça alguns apoiadores do projeto VAT no TikTok</p>
        <div className="flex flex-wrap">
          {tiktoksApoiadores.map((item, index) => (
            <TikTokVideo key={index} url={item} />
          ))}
        </div>
      </Section>

      <Section title="Depoimentos e Denuncias">d</Section>
    </main>
  );
};
