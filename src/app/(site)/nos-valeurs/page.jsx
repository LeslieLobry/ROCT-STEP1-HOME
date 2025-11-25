import styles from "./nos-valeurs.module.css";

export const metadata = {
  title: "Nos valeurs - Rugby Olympique Club Tourquennois",
};

export default function NosValeursPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.tag}>Le club</span>
          <h1 className={styles.title}>Nos valeurs</h1>

          <p className={styles.quote}>
            « Dans une équipe de rugby, il n&apos;y a pas de passagers,
            il n&apos;y a qu&apos;un équipage. »
            <span className={styles.quoteAuthor}>Pierre Villepreux</span>
          </p>

          <p className={styles.intro}>
            Depuis 1961, le Rugby Olympique Club Tourquennois s&apos;appuie sur
            des valeurs fortes qui dépassent le simple cadre du terrain :
            solidarité, respect, éducation, ouverture et convivialité.
          </p>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Année de création</span>
              <span className={styles.statValue}>1961</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Licenciés</span>
              <span className={styles.statValue}>400</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>
                Enfants à l&apos;École de rugby
              </span>
              <span className={styles.statValue}>150</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className={styles.layout}>
        {/* Colonne principale */}
        <div className={styles.columnMain}>
          <article className={styles.block}>
            <h2>Un club aux racines fortes</h2>
            <p>
              Créé en 1961, le ROCT a su garder, à travers des générations de
              dirigeants, souvent d&apos;anciens joueurs du club, ses valeurs :
              solidarité, tolérance, éducation, respect de l&apos;adversaire et
              de l&apos;arbitre, sens de l&apos;amitié et de la fête.
            </p>
          </article>

          <article className={styles.block}>
            <h2>Un club formateur</h2>
            <p>
              Avec l&apos;une des plus importantes Écoles de Rugby de la Ligue
              des Hauts de France, forte d&apos;environ 150 enfants réunis tous
              les samedis sous la vigilance de dirigeants et d&apos;éducateurs
              motivés, le club joue un rôle majeur dans la formation des jeunes.
            </p>
            <p>
              Le ROCT a formé de nombreux joueurs qui ont ensuite évolué dans de
              grands clubs français, certains étant même retenus dans des
              sélections nationales (Espagne, Géorgie, Belgique...).
            </p>
          </article>

          <article className={styles.block}>
            <h2>Un club ouvert à tous</h2>
            <p>
              Avec près de 400 licenciés, le club reçoit enfants, garçons et
              filles, ados, femmes, compétiteurs, joueurs loisirs, pratiquants
              des nouvelles pratiques (rugby à 5, à toucher), éducateurs,
              dirigeants...
            </p>
            <p>
              Le plus jeune de nos licenciés a 5 ans, le doyen 81&nbsp;ans…
              chacun trouve sa place au ROCT.
            </p>
          </article>

          <article className={styles.block}>
            <h2>Un club intégré dans son quartier</h2>
            <p>
              Depuis ses origines, le ROCT a évolué dans le quartier des Orions
              et ce sur trois stades différents. Il a su y tisser un réseau
              d&apos;amitiés et d&apos;échanges : stages ouverts aux jeunes du
              quartier, actions avec les centres sociaux, etc.
            </p>
          </article>

          <article className={styles.block}>
            <h2>
              Un club intégré dans sa ville et l&apos;environnement
              socio-économique
            </h2>
            <p>
              Seul club du secteur Tourcoing – Vallée de la Lys – Wattrelos, soit
              un bassin de plus de 300&nbsp;000 habitants, le ROCT crée de
              nombreux échanges avec le milieu scolaire et socio-économique du
              secteur.
            </p>
            <p>
              Conventions, stages, tournois inter-entreprises de rugby à
              toucher, réceptions et manifestations diverses rythment la vie du
              club.
            </p>
          </article>

          <article className={styles.block}>
            <h2>Un club ouvert à l&apos;international</h2>
            <p>
              Premier club de France… en venant de la Belgique (comme aimait à le
              dire l&apos;un de nos dirigeants historiques), le ROCT est tourné
              vers l&apos;étranger.
            </p>
            <p>
              Échanges avec le club anglais de Rochdale depuis 1964, tournois de
              jeunes ou de rugby loisirs avec des clubs belges, hollandais et
              anglais : les RLO ont déjà disputé des matchs à Édimbourg, Rome…
            </p>
          </article>

          <article className={styles.block}>
            <h2>Un club ouvert au milieu scolaire</h2>
            <p>
              Des conventions de partenariat ont été signées avec le Lycée
              Colbert et le Collège Aubrac de Tourcoing. Le ROCT a également
              collaboré à la création d&apos;une section sport-étude de rugby
              féminin au Lycée Sévigné pour la rentrée 2018/2019.
            </p>
            <p>
              Huit conventions ont été signées avec des écoles primaires de
              Tourcoing, permettant chaque année à de nombreux enfants de
              découvrir le rugby.
            </p>
          </article>

          <article className={styles.block}>
            <h2>Un club ouvert au handicap</h2>
            <p>
              En début de saison 2022/2023, sous l&apos;impulsion de Julie
              Lefebvre, le club a créé la catégorie Rugby Adapté. Elle accueille
              des jeunes en situation de handicap, présents chaque samedi de 10h
              à 11h pour s&apos;amuser avec un ballon ovale.
            </p>
            <p>
              L&apos;entraînement est divisé en ateliers permettant aux jeunes
              d&apos;acquérir de la motricité et d&apos;apprendre les bases du
              rugby comme la passe et le plaquage, dans un cadre sécurisé et
              bienveillant.
            </p>
          </article>

          <article className={styles.block}>
            <h2>Un club festif</h2>
            <p>
              Les troisièmes mi-temps font partie des traditions rugbystiques.
              Elles font aussi partie de l&apos;ADN du club.
            </p>
            <p>
              Grâce à de nombreux bénévoles, chaque après-match et chaque
              tournoi est l&apos;occasion de partager un moment festif. Le point
              d&apos;orgue reste la Fête du Club, qui réunit toutes les forces
              vives du ROCT.
            </p>
            <p>
              La date de la prochaine fête n&apos;a pas encore été décidée, mais
              elle sera très certainement programmée dans la première quinzaine
              de septembre 2024. On vous tiendra au courant&nbsp;!
            </p>
          </article>
        </div>

        {/* Aside */}
        <aside className={styles.columnAside}>
          <div className={styles.asideCard}>
            <h3>Nos mots clés</h3>
            <ul>
              <li>Solidarité</li>
              <li>Respect &amp; fair-play</li>
              <li>Éducation par le sport</li>
              <li>Ouverture &amp; convivialité</li>
            </ul>
          </div>

          <div className={styles.asideCard}>
            <h3>L&apos;École de rugby</h3>
            <p>
              De 5 à 14 ans, les enfants découvrent le rugby dans un cadre
              sécurisé, encadré par des éducateurs formés, avec un double
              objectif : progresser et prendre du plaisir.
            </p>
          </div>

          <div className={styles.asideCard}>
            <h3>Envie de nous rejoindre ?</h3>
            <p>
              Que vous soyez joueur, joueuse, parent, bénévole ou partenaire
              potentiel, le club vous accueille aux Orions pour partager notre
              passion commune du rugby.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
