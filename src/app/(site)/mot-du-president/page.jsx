import Image from "next/image";
import styles from "./mot-du-president.module.css";

export const metadata = {
  title: "Mot du président - Rugby Olympique Club Tourquennois",
};

export default function MotDuPresidentPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>

          {/* TEXTE À GAUCHE */}
          <div className={styles.heroLeft}>
            <span className={styles.tag}>Le club</span>
            <h1 className={styles.title}>Mot du président</h1>

            <p className={styles.quote}>
              « Le rugby ne se joue pas en 2 mais en 3 temps : Avant, la ferveur ;
              pendant, la bravoure ; après, la fraternité. »
              <span className={styles.quoteAuthor}>René Crabos</span>
            </p>

            <div className={styles.stats}>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Saison</span>
                <span className={styles.statValue}>2023-2024</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Président</span>
                <span className={styles.statValue}>Kamel Ledraa</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Complexe</span>
                <span className={styles.statValue}>Les Orions</span>
              </div>
            </div>
          </div>

          {/* PHOTO PRÉSIDENT */}
          <div className={styles.heroRight}>
            <div className={styles.presidentPhotoWrapper}>
              <Image
                src="/images/kamel.jpg" 
                alt="Photo du Président du ROCT"
                fill
                className={styles.presidentPhoto}
              />
            </div>
          </div>

        </div>
      </section>

      {/* CONTENU */}
      <section className={styles.layout}>
        {/* Colonne principale */}
        <article className={styles.columnMain}>
          <p className={styles.chapo}>Ce qui nous rend fiers</p>

          <p>
            La joie, l&apos;émotion… et forcément une pointe de tristesse après
            cette Coupe du monde de rugby en France, perdue d&apos;un point en
            quart de finale, se sont déjà estompées...
          </p>

          <p>
            Notre nombre de licenciés ne cesse de progresser, saison après saison…
          </p>

          <p>
            C&apos;est pour cela que les projets ne manquent pas : obtenir une
            labellisation 2 ou 3 étoiles pour notre École de Rugby, poursuivre
            l&apos;amélioration des équipements...
          </p>

          <p>
            Qu&apos;il s&apos;agisse du développement du rugby féminin, du rugby
            adapté, du rugby loisirs ou du rugby à 5...
          </p>

          <p>
            Le tout en restant fidèle à ce qui fait notre identité...
          </p>

          <p>
            Je n&apos;oublie pas, bien sûr, nos partenaires et nos sponsors...
          </p>

          <p className={styles.signature}>
            <span className={styles.signatureName}>Kamel LEDRAA</span>
            <span className={styles.signatureRole}>Président du ROCT</span>
          </p>
        </article>

        {/* Aside */}
        <aside className={styles.columnAside}>
          <div className={styles.asideCard}>
            <h2>Un club en mouvement</h2>
            <p>
              Hausse du nombre de licenciés, nouveaux équipements, projets structurants...
            </p>
          </div>

          <div className={styles.asideCard}>
            <h2>Priorité formation</h2>
            <p>
              De l&apos;École de Rugby aux cadets et juniors...
            </p>
          </div>

          <div className={styles.asideCard}>
            <h2>Un rôle social fort</h2>
            <p>
              Rugby féminin, rugby adapté, interventions scolaires...
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
