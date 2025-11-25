import Link from "next/link";
import Nav from "@/components/Nav";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            <img
              src="/images/logo.png"
              alt="ROCT"
              width={244}
            //   height={244}
              className={styles.logo}
            />

          </Link>

          <Nav />
        </div>
      </div>
    </header>
  );
}
