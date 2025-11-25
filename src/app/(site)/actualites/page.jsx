import prisma from "@/lib/prisma";
import styles from "./actualites.module.css";

export const metadata = {
  title: "Actualités - Rugby Olympique Club Tourquennois",
};

export default async function ActualitesPage() {
  const actualites = await prisma.actualite.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.tag}>Le club</span>
          <h1 className={styles.title}>Actualités</h1>
          <p className={styles.intro}>
            Résultats, événements, vie du club : retrouvez ici les dernières
            actualités du Rugby Olympique Club Tourquennois.
          </p>
        </div>
      </section>

      {/* LAYOUT */}
      <section className={styles.layout}>
        {/* Colonne Actus ROCT */}
        <div className={styles.columnMain}>
          <h2 className={styles.sectionTitle}>Les actualités du club</h2>

          {actualites.length === 0 && <p>Aucune actualité pour le moment.</p>}

          <ul className={styles.list}>
            {actualites.map((actu) => (
              <li key={actu.id} className={styles.card}>
                <p className={styles.date}>
                  {new Date(actu.createdAt).toLocaleDateString("fr-FR")}
                </p>
                <h3 className={styles.cardTitle}>{actu.titre}</h3>

                {actu.chapo && <p className={styles.chapo}>{actu.chapo}</p>}

                {actu.contenu && (
                  <div
                    className={styles.contenu}
                    dangerouslySetInnerHTML={{ __html: actu.contenu }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne Facebook */}
        <aside className={styles.columnAside}>
          <h2 className={styles.sectionTitle}>Fil Facebook</h2>

          <p className={styles.fbText}>
            Suivez toute l&apos;actualité du ROCT sur notre page Facebook :
            résultats, photos, annonces de matchs et événements.
          </p>
          {/* IFRAME FACEBOOK (version fiable) */}
         <div className={styles.fbFrameWrapper}>
  <iframe
    title="Fil Facebook ROCT"
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRugbyOCTourquennois%3Flocale%3Dfr_FR&tabs=timeline&width=360&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
    width="100%"
    height="500"
    style={{ border: "none", overflow: "hidden" }}
    scrolling="no"
    frameBorder="0"
    allow="encrypted-media; picture-in-picture; web-share"
  ></iframe>
</div>
        </aside>
      </section>
    </main>
  );
}
