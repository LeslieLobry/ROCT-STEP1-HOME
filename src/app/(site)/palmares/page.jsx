import prisma from "../../../lib/prisma";
import styles from "./palmares.module.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Palmarès - Rugby Olympique Club Tourquennois",
};

function groupBySaison(entries) {
  const map = new Map();

  for (const e of entries) {
    if (!map.has(e.saison)) {
      map.set(e.saison, []);
    }
    map.get(e.saison).push(e);
  }

  // tri par saison décroissante (dernières années en haut)
  return Array.from(map.entries()).sort((a, b) =>
    a[0] < b[0] ? 1 : -1
  );
}

export default async function PalmaresPage() {
  const entries = await prisma.palmares.findMany({
    orderBy: [{ saison: "asc" }, { ordre: "asc" }, { id: "asc" }],
  });

  const grouped = groupBySaison(entries);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.tag}>Le club</span>
          <h1 className={styles.title}>Palmarès du ROCT</h1>
          <p className={styles.intro}>
            Des titres régionaux aux accessions nationales, retrouvez
            les performances marquantes de toutes les générations
            tourquennoises.
          </p>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Titres & accessions</span>
              <span className={styles.statValue}>
                {entries.length}
              </span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Saisons référencées</span>
              <span className={styles.statValue}>
                {grouped.length}
              </span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Compétitions</span>
              <span className={styles.statValue}>Jeunes & Séniors</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className={styles.layout}>
        <div className={styles.columnMain}>
          {grouped.length === 0 && (
            <p>Aucun palmarès pour le moment. Ajoute des lignes via l’admin.</p>
          )}

          {grouped.map(([saison, lignes]) => (
            <div key={saison} className={styles.saisonBlock}>
              <div className={styles.saisonHeader}>
                <span className={styles.saisonBadge}>{saison}</span>
                <div className={styles.saisonLine} />
              </div>

              <ul className={styles.saisonList}>
                {lignes.map((l) => (
                  <li key={l.id} className={styles.saisonItem}>
                    {l.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <aside className={styles.columnAside}>
          <div className={styles.asideCard}>
            <h2>Titres majeurs</h2>
            <p>
              Coupes des Flandres, accessions nationales, titres de Ligue… le
              ROCT a marqué l’histoire du rugby dans les Hauts-de-France.
            </p>
          </div>
          <div className={styles.asideCard}>
            <h2>De l’école de rugby aux séniors</h2>
            <p>
              Cadets, juniors, féminines, séniors : toutes les générations
              contribuent au palmarès du club.
            </p>
          </div>
          <div className={styles.asideCard}>
            <h2>Une histoire à écrire</h2>
            <p>
              Chaque saison est une occasion d’ajouter une ligne de plus.
              Le prochain titre ? Peut-être cette année.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
