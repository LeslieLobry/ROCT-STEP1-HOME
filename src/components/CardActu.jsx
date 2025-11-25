import Link from "next/link";
// import "./CardActu.css";

export default function CardActu({ actu }) {
  if (!actu) return null;

  const { cover, title, slug, date, excerpt } = actu;

  return (
    <article className="card-actu">
      {cover && (
        <div className="card-actu-image">
          <img src={cover} alt={title} />
        </div>
      )}

      <div className="card-actu-content">
        <h3 className="card-actu-title">
          <Link href={`/actualites/${slug}`}>{title}</Link>
        </h3>

        <p className="card-actu-date">
          {new Date(date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <p className="card-actu-excerpt">{excerpt}</p>
      </div>
    </article>
  );
}
