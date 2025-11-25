import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero({ nextMatch }) {
  // nextMatch: { competition, date, time, home, away, lieu }
  return (
    <section className={styles.wrap}>
      <div className={styles.kv} />
      <div className={styles.inner}>
        <div>
          <h1 className={styles.title}>Rugby Olympique Club Tourcoing</h1>
          <p className={styles.subtitle}>Esprit d’équipe. Engagement. Convivialité.</p>
          <div className={styles.cta}>
            <Link href="/actualites" className={styles.btnPrimary}>Dernières actualités</Link>
            <Link href="/nos-equipes" className={styles.btnGhost}>Nos équipes</Link>
          </div>
        </div>

        <div className={styles.matchCard}>
          <div className={styles.matchHead}>
            <span>{nextMatch?.competition ?? "Championnat"}</span>
            <span>{nextMatch?.date ?? ""} • {nextMatch?.time ?? ""}</span>
          </div>
          <div className={styles.teams}>
            <div className={styles.team}>
              <div className={styles.badge}>
                <img src="/images/logo.png" alt="ROCT" width={28} height={28}/>
              </div>
              <strong>{nextMatch?.home ?? "ROCT"}</strong>
            </div>
            <div className={styles.vs}>VS</div>
            <div className={styles.team} style={{justifyContent: "end"}}>
              <strong>{nextMatch?.away ?? "Adversaire"}</strong>
              <div className={styles.badge}>
                <img src="/images/adversaire.png" alt="Adversaire" width={28} height={28}/>
              </div>
            </div>
          </div>
          <div style={{marginTop: 12, fontSize: 14, opacity: .95}}>
            {nextMatch?.lieu ?? "Stade des Orions, Tourcoing"}
          </div>
        </div>
      </div>
    </section>
  );
}
