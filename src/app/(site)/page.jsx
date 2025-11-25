import Hero from "@/components/Hero";
import MatchTicker from "@/components/MatchTicker";
import PartnersCarousel from "@/components/PartnersCarousel";
import SectionTitle from "@/components/SectionTitle";
import CardActu from "@/components/CardActu";
import ScorencoWidget from "@/components/ScorencoWidget";
import { listActus } from "@/lib/content";

export default async function Home() {
  const actus = await listActus({ limit: 6 });

  const nextMatch = {
    competition: "Régional 1",
    date: "Dim. 16 Nov.",
    time: "15:00",
    home: "ROCT",
    away: "Lille Métropole",
    lieu: "Stade des Orions, Tourcoing",
  };

  const tickerItems = [
    { label: "Seniors",   score: "ROCT 17 - 10 RCL (60’)" },
    { label: "Féminines", score: "Repos ce week-end" },
    { label: "Loisir",    score: "Entraînement vendredi 19h30" },
  ];

  const partnerLogos = [
    "/images/partners/p1.jpg",
    "/images/partners/p2.png",
    "/images/partners/p3.png",
    "/images/partners/p4.png",
    "/images/partners/p5.png",
    "/images/partners/p6.webp",
    "/images/partners/p7.jpg",
    "/images/partners/p8.png",
    "/images/partners/p9.jpg",
    "/images/partners/p10.jpg",
    "/images/partners/p11.jpg",
    "/images/partners/p12.jpg",


  ];

  return (
    <>
      <MatchTicker items={tickerItems} />
      <Hero nextMatch={nextMatch} />

      {/* --- Widget Scorenco (équipe SENIOR M1 – id 158652) --- */}
      <SectionTitle>Prochain match / Live</SectionTitle>
      <ScorencoWidget
        type="team"
        id="158652"
        height={520}
        bg="#FFFFFF"
        color="#BB262C"    // couleurs ROCT
        // Ajoute des options si Scorenco en fournit, ex:
        // extraAttrs={{ "widget-view": "next" }}
      />

      <section style={{ padding: "24px 0" }}>
        <SectionTitle href="/actualites">Dernières actualités</SectionTitle>
        <div className="grid">
          {actus.map((a) => (
            <CardActu key={a.slug} actu={a} />
          ))}
        </div>
      </section>

      <PartnersCarousel logos={partnerLogos} />
    </>
  );
}
