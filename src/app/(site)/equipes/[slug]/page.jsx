// src/app/equipes/[slug]/page.jsx
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import styles from "./equipes.module.css";

export const dynamic = "force-dynamic";

/* --------- valeurs par défaut (fallback) ---------- */
const DEFAULT_EQUIPES = {
  "ecole-de-rugby": {
    nom: "École de Rugby",
    categorie: "U6 à U14",
    accroche:
      "Découverte du rugby, plaisir du jeu et premiers plaquages contrôlés.",
    description: [
      "L’École de Rugby du ROCT accueille les enfants dès 5 ans pour leur faire découvrir le rugby dans un cadre sécurisé, ludique et éducatif.",
      "Encadrés par des éducateurs diplômés, les enfants apprennent les bases : tenue du ballon, passes, déplacements, respect des règles et des autres.",
    ],
  },
  "cadets-u16": {
    nom: "Équipe Cadets U16",
    categorie: "U16",
    accroche:
      "Le passage vers le rugby compétitif, tout en gardant le plaisir du jeu.",
    description: [
      "Les cadets U16 travaillent les fondamentaux collectifs : conquête, défense, occupation du terrain.",
      "Objectif : préparer sereinement le passage vers les catégories Juniors et Seniors.",
    ],
  },
  "cadettes-u18": {
    nom: "Équipe Cadettes U18",
    categorie: "U18 Féminines",
    accroche:
      "Une équipe dynamique qui porte haut les couleurs du rugby féminin à Tourcoing.",
    description: [
      "Les cadettes évoluent en championnat régional, avec un vrai projet de formation pour le rugby féminin.",
    ],
  },
  "juniors-u18-u19": {
    nom: "Équipe Juniors U18/U19",
    categorie: "U18 / U19",
    accroche:
      "Dernière étape de la formation avant le groupe Seniors, avec un vrai projet de jeu.",
    description: [
      "Les Juniors représentent l’avenir du ROCT. Ils participent aux championnats régionaux et nationaux selon les saisons.",
    ],
  },
  seniors: {
    nom: "Équipes Seniors",
    categorie: "Seniors Masculins",
    accroche: "Le groupe fanion du club, entre performance et convivialité.",
    description: [
      "Les équipes Seniors évoluent en championnat régional, avec l’ambition de jouer les premiers rôles.",
    ],
  },
  feminines: {
    nom: "Équipe Féminines",
    categorie: "Seniors Féminines",
    accroche:
      "Une équipe en développement, ouverte à toutes, débutantes comme confirmées.",
    description: [
      "Le ROCT accompagne le développement du rugby féminin avec un groupe seniors en progression constante.",
    ],
  },
  loisirs: {
    nom: "Équipe Rugby Loisirs",
    categorie: "Loisir / RLO",
    accroche:
      "Jouer au rugby sans pression du résultat, dans un esprit 100% convivial.",
    description: [
      "L’équipe Loisirs réunit d’anciens joueurs, des débutants et des curieux qui veulent découvrir le rugby autrement.",
    ],
  },
  "rugby-adapte": {
    nom: "Rugby Adapté",
    categorie: "Jeunes en situation de handicap",
    accroche:
      "Une pratique inclusive et adaptée, pour partager le rugby avec tous.",
    description: [
      "La section Rugby Adapté accueille des jeunes en situation de handicap autour d’ateliers spécifiques.",
    ],
  },
  "rugby-a-5": {
    nom: "Rugby à 5",
    categorie: "Tout public",
    accroche:
      "Du rugby sans plaquage, mixte et accessible, idéal pour débuter ou reprendre.",
    description: [
      "Le rugby à 5 se pratique sans contact, sur petit terrain, dans un format dynamique et fun.",
    ],
  },
};

/* --------- page dynamique ---------- */

export default async function EquipePage({ params }) {
  const { slug } = params;

  // 1) On tente de lire en base
  const dbEquipe = await prisma.equipe.findUnique({
    where: { slug },
  });

  // 2) On récupère éventuellement la config par défaut
  const fallback = DEFAULT_EQUIPES[slug];

  // Si ni en base ni en défaut -> 404
  if (!dbEquipe && !fallback) {
    notFound();
  }

  // On construit un objet fusionné (BDD > fallback)
  const equipe = {
    nom: dbEquipe?.nom ?? fallback?.nom ?? "",
    categorie: dbEquipe?.categorie ?? fallback?.categorie ?? "",
    accroche: dbEquipe?.accroche ?? fallback?.accroche ?? "",
    // si on a du contenu en BDD, on l’utilise, sinon on concatene les paragraphes par défaut
    contenu:
      dbEquipe?.contenu ??
      (fallback?.description
        ? fallback.description.join("\n\n")
        : ""),
    photoUrl: dbEquipe?.photoUrl ?? null,
    entrainements: dbEquipe?.entrainements ?? "",
    staff: dbEquipe?.staff ?? "",
  };

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.tag}>Les équipes</span>
          <h1 className={styles.title}>{equipe.nom}</h1>
          {equipe.categorie && (
            <p className={styles.category}>{equipe.categorie}</p>
          )}
          {equipe.accroche && (
            <p className={styles.acroche}>{equipe.accroche}</p>
          )}
        </div>
      </section>

      {/* CONTENU */}
      <section className={styles.layout}>
        <article className={styles.mainCard}>
          {equipe.photoUrl && (
            <div className={styles.photoWrapper}>
              {/* si tu utilises déjà next/image tu peux le remplacer */}
              <img
                src={equipe.photoUrl}
                alt={equipe.nom}
                className={styles.photo}
              />
            </div>
          )}

          {equipe.contenu && (
            <div className={styles.text}>
              {equipe.contenu.split("\n\n").map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h2>Entraînements</h2>
              <p>
                {equipe.entrainements || (
                  <em>À compléter : jours, horaires, lieu d&apos;entraînement…</em>
                )}
              </p>
            </div>
            <div className={styles.infoCard}>
              <h2>Staff</h2>
              <p>
                {equipe.staff || (
                  <em>À compléter : entraîneurs, managers, référents…</em>
                )}
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
