import Link from "next/link";
import styles from "./SectionTitle.module.css";

export default function SectionTitle({ children, href }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <span className={styles.dot} />
        <h2 className={styles.title}>{children}</h2>
      </div>
      {href && <Link className={styles.link} href={href}>Voir tout</Link>}
    </div>
  );
}
