import styles from "./MatchTicker.module.css";

/** items = [{ label: "Seniors", score: "ROCT 17 - 10 RCL (60')" }, ...] */
export default function MatchTicker({ items = [] }) {
  const list = items.length ? items : [
    { label: "Seniors",  score: "ROCT 17 - 10 RCL (60’)" },
    { label: "Féminines",score: "Repos ce week-end" },
    { label: "Loisir",   score: "Entraînement vendredi 19h30" },
  ];
  // Duplique la liste pour un slide infini
  const loop = [...list, ...list];

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <span className={styles.pill}>LIVE</span>
        <div className={styles.tape} aria-live="polite">
          {loop.map((it, i) => (
            <span className={styles.item} key={i}>
              <strong>{it.label}</strong><span className={styles.sep}>•</span>{it.score}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
