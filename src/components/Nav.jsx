import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>Accueil</Link>

      {/* --- Dropdown Notre club --- */}
      <div className={styles.dropdown}>
        <span className={styles.link}>Notre club ▾</span>
        <div className={styles.menu}>
          <Link href="/historique">Historique</Link>
          <Link href="/palmares">Palmarès</Link>
          <Link href="/nos-valeurs">Nos valeurs</Link>
          <Link href="/mot-du-president">Mot du président</Link>
        </div>
      </div>

      {/* --- Dropdown Nos équipes --- */}
      <div className={styles.dropdown}>
        <span className={styles.link}>Nos équipes ▾</span>
        <div className={styles.menu}>
          <Link href="/equipes/ecole-de-rugby">École de Rugby</Link>
          <Link href="/equipes/cadets-u16">Équipe Cadets U16</Link>
          <Link href="/equipes/cadettes-u18">Équipe Cadettes U18</Link>
          <Link href="/equipes/juniors-u18-u19">Équipe Juniors U18/U19</Link>
          <Link href="/equipes/seniors">Équipes Seniors</Link>
          <Link href="/equipes/feminines">Équipe Féminines</Link>
          <Link href="/equipes/loisirs">Rugby Loisirs</Link>
          <Link href="/equipes/rugby-adapte">Rugby Adapté</Link>
          <Link href="/equipes/rugby-a-5">Rugby à 5</Link>
        </div>
      </div>

      <Link href="/actualites" className={styles.link}>Actualités</Link>
      {/* <Link href="/scores" className={styles.link}>Scores</Link> */}
      <Link href="/contact" className={styles.link}>Contact</Link>
      <Link href="https://www.shop-rugby-tourcoing.com/" className={styles.link}>Boutique</Link>

    </nav>
  );
}
