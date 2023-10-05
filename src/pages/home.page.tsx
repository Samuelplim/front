import { ButtonNav } from "../components/buttonNav";
import { Section } from "../components/section";
import TikTokVideo from "../components/tiktokVideo";

type LinkProps = {
  title: string;
  link: string;
};
export const HomePage = () => {
  const links: LinkProps[] = [
    {
      title: "Abaixo-assinado VAT",
      link: "https://peticaopublica.com.br/pview.aspx?pi=BR135067",
    },
    {
      title: "WhatsApp",
      link: "https://chat.whatsapp.com/Klb3kit9NViKH3oFhdEPc8",
    },
    {
      title: "Telegram",
      link: "https://t.me/+-6FKOpL3K4diMjEx",
    },
    {
      title: "Enquete - Onde você mora?",
      link: "https://forms.gle/VBWbr2DFmpZvro4r5",
    },
  ];
  const redesSociais: LinkProps[] = [
    { title: "Instagram", link: "https://instagram.com/movimento_vat" },
    { title: "TikTok", link: "https://www.tiktok.com/@movimento_vat" },
    { title: "Twitter", link: "https://www.reddit.com/r/movimento_vat/" },
  ];
  const gruposWpp: LinkProps[] = [
    { title: "SP", link: "https://chat.whatsapp.com/FrCpQSiWaJlHyw2ERjEiO5" },
    { title: "RJ", link: "https://chat.whatsapp.com/CYOpoDU6btNAAOpbV1KjQf" },
    { title: "AC", link: "https://chat.whatsapp.com/CpTRRhLRnkb9BWgyhtpHIh" },
    { title: "AL", link: "https://chat.whatsapp.com/DrYwDgWSla7LUxGJr4SsO5" },
    { title: "AM", link: "https://chat.whatsapp.com/F4Cz2j7Qfb8IV3Px4gH7VO" },
    { title: "AP", link: "https://chat.whatsapp.com/DHDZ5jbCkmuADGwGmIluSo" },
    { title: "BA", link: "https://chat.whatsapp.com/GsMV49EnRnt3Ks5A5MzLK8" },
    { title: "CE", link: "https://chat.whatsapp.com/DSPRVj0Ak9r3hSqmxLGeCU" },
    { title: "DF", link: "https://chat.whatsapp.com/IrOsv9aCtBc7jegPFzd9BP" },
    { title: "ES", link: "https://chat.whatsapp.com/E7Htv67io3NHREBUUAh3G2" },
    { title: "GO", link: "https://chat.whatsapp.com/IjEepWkCXOu1S9BR5sPrtc" },
    { title: "MA", link: "https://chat.whatsapp.com/JCoXbxLmP6pA0dvjXm7PyG" },
    { title: "MG", link: "https://chat.whatsapp.com/BRZAgxyx6dB8wdYtnLMN6R" },
    { title: "MS", link: "https://chat.whatsapp.com/JsCItRNmUo5FGcFeNs7lii" },
    { title: "MT", link: "https://chat.whatsapp.com/G5nLUvVyuy70LpzdTy6Bxw" },
    { title: "PA", link: "https://chat.whatsapp.com/EXfwtJTcGRlKk0nUSEfXiy" },
    { title: "PB", link: "https://chat.whatsapp.com/HPOi8PJSbcJHLNCqqe5Zj7" },
    { title: "PE", link: "https://chat.whatsapp.com/I67gJcbW7SkCvmUjzdO0Nv" },
    { title: "PI", link: "https://chat.whatsapp.com/HHL1hPba8Yw9l20Q2jfGhO" },
    { title: "PR", link: "https://chat.whatsapp.com/Ei5mu5YUfNCGiPMSWj9iok" },
    { title: "RN", link: "https://chat.whatsapp.com/Ho8CL6ZQSZvB1KpZolCkxJ" },
    { title: "RO", link: "https://chat.whatsapp.com/Lv4G5ai9CA07YJy3BK5voP" },
    { title: "RR", link: "https://chat.whatsapp.com/J35QzNTrH4h4BJ8hLTwzXF" },
    { title: "RS", link: "https://chat.whatsapp.com/I8EBvEOAS2ZI4wX0RGEE8c" },
    { title: "SC", link: "https://chat.whatsapp.com/BoEaAauqPfSJkfKZEHW0ya" },
    { title: "SE", link: "https://chat.whatsapp.com/GPiP4RWGozx8aO0vQdqZqk" },
    { title: "TO", link: "https://chat.whatsapp.com/FbJyqBzVLFQ0QypaWQqXO7" },
  ];
  const tiktoksApoiadores = [
    "https://www.tiktok.com/@andressahcatty/video/7284070820505324805",
    "",
  ];
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

        <section hidden>
          {links.map((item) => {
            return <p>{item.title}</p>;
          })}
          {redesSociais.map((item) => {
            return <p>{item.title}</p>;
          })}
          <div className="flex flex-col gap-6">
            <p>Entre no grupo do WhatsApp do seu estado</p>
            <div className="flex gap-4">
              {gruposWpp.map((item) => {
                return <p>{item.title}</p>;
              })}
            </div>
          </div>
        </section>
        <Section title="Apoiadores da causa">
          {tiktoksApoiadores.map((item, index) => (
            <TikTokVideo key={index} url={item} />
          ))}
        </Section>
      </main>
    </>
  );
};
