import prisma from "../../../lib/prisma"
import styles from "./historique.module.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Historique - Rugby Olympique Club Tourquennois",
};

export default async function HistoriquePage() {
  const item = await prisma.historique.findFirst();

  const title = item?.title || "Historique du ROCT";
  const intro =
    item?.intro ||
    "Depuis la fin des années 1950, le rugby se construit à Tourcoing au rythme des générations de joueurs, de bénévoles et d’entraîneurs.";

 const body =
    item?.body ||
    `
    <p><strong>1958</strong> – Premiers entraînements de rugby à Tourcoing sous la houlette de Pierre Delannoy, dirigeant du LUC muté à Tourcoing et qui monte une équipe juniors au lycée Colbert. Un des six terrains de football de la rue de Roncq est équipé de poteaux de rugby.</p>

    <p><strong>1960 – 1961</strong> – Les lycéens tourquennois remportent les championnats d’Académie en cadets et juniors. Jean DESURMONT, entouré de plusieurs dirigeants dont Pierre DEGROOTE, décide de fonder un club dont les statuts sont déposés le 12 avril 1961. La ville de Tourcoing attribue un des six terrains au ROCT nouvellement créé, et y installe des poteaux de rugby.</p>

    <p><strong>1964</strong> – Le stade des Six-Terrains est officiellement inauguré par un match opposant l’équipe des Flandres et celle du Racing Club de France.</p>

    <p><strong>1971 – 1972</strong> – L’équipe juniors du ROCT, emmenée notamment par Dominique RONDELAERE qui sera ensuite président du club, se qualifie pour la première fois pour les championnats de France. Le club commence à remporter des titres en seniors.</p>

    <p><strong>1979 – 1980</strong> – Les seniors, 2èmes du championnat des Flandres, accèdent pour la première fois à la 3ème division nationale en battant Villiers-sur-Marne 12-9 à Saint-Quentin.</p>

    <p><strong>1980 – 1982</strong> – Pour la seule fois de son histoire, Tourcoing se maintient deux saisons en Nationale, affrontant des équipes parisiennes et normandes. Il redescend en 1982.</p>

    <p><strong>1983 – 1984</strong> – Création de la première équipe féminine du Rugby Olympique Club Tourquennois et de la Ligue des Hauts de France de Rugby (anciennement appelé Comité des Flandres), engagée en championnat national dans le comité de l’Île-de-France.</p>

    <p><strong>1984 – 1985</strong> – Après plusieurs titres dans les Flandres, les seniors accèdent de nouveau à la Nationale 3 en battant Gonesse 9 à 6, de nouveau à Saint-Quentin. La saison 1985-1986 est, à ce jour, la dernière au niveau national pour les seniors masculins.</p>

    <p><strong>1986</strong> – Moment historique pour le club : l’équipe de France au complet, entraînée par Jacques FOUROUX et où jouent les BLACO, SELLA, BERBIZIER ou LAGISQUET, vient s’entraîner au stade des Six-Terrains, avant un match contre la Roumanie qu’elle remportera 25-13 le 12 avril 1986.</p>

    <p><strong>1989</strong> – Inauguration du nouveau stade Pierre DEGROOTE, par un match entre Tourcoing et l’équipe de Bruxelles, puis par un match officiel de challenge Yves du Manoir entre le Sporting Club Graulhet et le Racing Club de France.</p>

    <p><strong>2011</strong> – Après 21 saisons au stade DEGROOTE et de nombreux titres en seniors, juniors et cadets, le ROCT s’installe dans le nouveau stade des Orions, où il bénéficie d’un terrain d’honneur, d’un terrain d’entraînement synthétique 3ème génération, de vestiaires et d’un club-house neufs. Les seniors opèrent en Honneur ou en Promotion d’Honneur.</p>

    <p><strong>15 juin 2013</strong> – Le stade des Orions est officiellement inauguré à l’occasion de la journée DEBOMY-FABRE qui réunit les 350 licenciés du club.</p>

    <p><strong>2014</strong> – Les féminines de Tourcoing montent une entente avec l’équipe de Villeneuve d’Ascq, ce qui leur permet d’opérer au niveau Fédéral, le plus élevé atteint par une équipe du ROCT.</p>

    <p><strong>2015 – 2016</strong> – Les seniors masculins sont finalistes des championnats des Flandres 1ère série, en A et en B.</p>

    <p><strong>2017 – 2018</strong> – Les seniors masculins sont finalistes des championnats des Flandres en Promotion Honneur. Les U18 sont finalistes du championnat de France Danet Secteur Nord Est France à 12. Les U16 remportent la Coupe des Flandres.</p>

    <p><strong>2018 – 2019</strong> – Les seniors masculins sont de nouveau finalistes des championnats des Flandres en Promotion Honneur. Les U18 sont une nouvelle fois finalistes du championnat de France Danet Secteur Nord Est France à 12. Les U16 remportent encore la Coupe des Flandres.</p>

    <p><strong>Août 2023</strong> – Notre club dispose enfin d’un nouveau parking. L’accès aux terrains de rugby, côté rue des Orions, a été entièrement rebitumé, remplaçant celui en schiste complètement impraticable, à la grande satisfaction des licenciés et supporters.</p>
  `;
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.tag}>Le club</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.intro}>{intro}</p>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Années d&apos;histoire</span>
              <span className={styles.statValue}>+60</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Générations formées</span>
              <span className={styles.statValue}>4+</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Stade des Orions</span>
              <span className={styles.statValue}>🏟️</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className={styles.layout}>
        <div className={styles.columnMain}>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            <article
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        </div>

        <aside className={styles.columnAside}>
          <div className={styles.asideCard}>
            <h2>ADN ROCT</h2>
            <p>
              Engagement, solidarité, respect : le club s’est construit autour
              de valeurs fortes, sur et en dehors du terrain.
            </p>
          </div>

          <div className={styles.asideCard}>
            <h2>Stade &amp; infrastructures</h2>
            <p>
              Du terrain de la rue de Roncq au stade des Orions, les
              installations ont évolué au rythme des ambitions du club.
            </p>
          </div>

          <div className={styles.asideCard}>
            <h2>École de rugby</h2>
            <p>
              Les plus jeunes portent les couleurs rouge et noir, encadrés par
              des éducateurs diplômés et passionnés.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
