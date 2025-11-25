// src/app/admin/equipes/page.jsx
import Link from "next/link";
import "./[slug]/equipes.module.css"
const EQUIPES_ADMIN = [
  { slug: "ecole-de-rugby", label: "École de Rugby" },
  { slug: "cadets-u16", label: "Équipe Cadets U16" },
  { slug: "cadettes-u18", label: "Équipe Cadettes U18" },
  { slug: "juniors-u18-u19", label: "Équipe Juniors U18/U19" },
  { slug: "seniors", label: "Équipes Seniors" },
  { slug: "feminines", label: "Équipe Féminines" },
  { slug: "loisirs", label: "Équipe Rugby Loisirs" },
  { slug: "rugby-adapte", label: "Rugby Adapté" },
  { slug: "rugby-a-5", label: "Rugby à 5" },
];

export const metadata = {
  title: "Admin - Équipes",
};

export default function AdminEquipesPage() {
  return (
    
    <main style={{ padding: "2rem" }}>
        {/* Bouton retour */}
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/admin">
          <button type="button">← Retour à l’admin</button>
        </Link>
      </div>
      <h1>Administration des équipes</h1>
      <p>Choisissez une équipe pour modifier son contenu.</p>

      <ul style={{ marginTop: "1rem", paddingLeft: 0, listStyle: "none" }}>
        {EQUIPES_ADMIN.map((equipe) => (
          <li key={equipe.slug} style={{ marginBottom: "0.5rem" }}>
            <Link href={`/admin/equipes/${equipe.slug}`}>
              {equipe.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
