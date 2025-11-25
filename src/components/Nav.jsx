import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>Accueil</Link>

      <div className={styles.dropdown}>
        <span className={styles.link}>Notre club ▾</span>
        <div className={styles.menu}>
          <Link href="/notre-club/historique">Historique</Link>
          <Link href="/notre-club/palmares">Palmarès</Link>
          <Link href="/notre-club/valeurs">Nos valeurs</Link>
          <Link href="/notre-club/mot-du-president">Mot du président</Link>
        </div>
      </div>

      <Link href="/nos-equipes" className={styles.link}>Nos équipes</Link>
      <Link href="/actualites" className={styles.link}>Actualités</Link>
      <Link href="/scores" className={styles.link}>Scores</Link>
      <Link href="/contact" className={styles.link}>Contact</Link>
    </nav>
  );
}
