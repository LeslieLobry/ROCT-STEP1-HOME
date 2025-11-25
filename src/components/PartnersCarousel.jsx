import styles from "./PartnersCarousel.module.css";

/** logos = ["/images/partners/bk.png", "/images/partners/nike.png", ...] */
export default function PartnersCarousel({ logos = [] }) {
  const list = logos.length ? logos : [
    "/images/partners/p1.png",
    "/images/partners/p2.png",
    "/images/partners/p3.png",
    "/images/partners/p4.png",
    "/images/partners/p5.png",
  ];
  const loop = [...list, ...list]; // pour l'effet infini

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <h3 className={styles.title}>Merci à nos partenaires</h3>
        <div className={styles.rail}>
          <div className={styles.track}>
            {loop.map((src, i) => (
              <div key={i} className={styles.logo}>
                <img src={src} alt="Partenaire" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
