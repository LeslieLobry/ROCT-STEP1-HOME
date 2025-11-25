"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import "./equipes.module.css"
export default function AdminEquipeEditPage({ params }) {
  const { slug } = params;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    nom: "",
    categorie: "",
    accroche: "",
    contenu: "",
    photoUrl: "",
    entrainements: "",
    staff: "",
  });

  // Chargement initial depuis l'API
  useEffect(() => {
    async function loadEquipe() {
      try {
        const res = await fetch(`/api/admin/equipes/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setForm({
            nom: data.nom || "",
            categorie: data.categorie || "",
            accroche: data.accroche || "",
            contenu: data.contenu || "",
            photoUrl: data.photoUrl || "",
            entrainements: data.entrainements || "",
            staff: data.staff || "",
          });
        } else {
          // 404 = aucune entrée en base pour ce slug -> on laisse vide
          console.log("Aucune entrée en base pour", slug);
        }
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement des données.");
      } finally {
        setLoading(false);
      }
    }

    loadEquipe();
  }, [slug]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch(`/api/admin/equipes/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur lors de l'enregistrement");
      }

      setMessage("Équipe enregistrée avec succès.");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
     {/* Bouton retour */}
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/admin/equipes">
          <button type="button">← Retour aux équipes</button>
        </Link>
      </div>
      <h1>Édition de l&apos;équipe : {slug}</h1>

      {loading && <p>Chargement...</p>}

      {!loading && (
        <form onSubmit={handleSubmit}>
          {error && (
            <p style={{ color: "red" }}>
              {error}
            </p>
          )}
          {message && (
            <p style={{ color: "green" }}>
              {message}
            </p>
          )}

          <div style={{ marginBottom: "1rem" }}>
            <label>
              Nom de l&apos;équipe<br />
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                style={{ width: "100%" }}
              />
            </label>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>
              Catégorie<br />
              <input
                type="text"
                name="categorie"
                value={form.categorie}
                onChange={handleChange}
                placeholder="Ex : U6 à U14, Seniors, Féminines…"
                style={{ width: "100%" }}
              />
            </label>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>
              Accroche (phrase courte)<br />
              <input
                type="text"
                name="accroche"
                value={form.accroche}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </label>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>
              Contenu (texte long)<br />
              <textarea
                name="contenu"
                value={form.contenu}
                onChange={handleChange}
                rows={8}
                style={{ width: "100%", resize: "vertical" }}
                placeholder="Texte de présentation de l'équipe…"
              />
            </label>
            <p style={{ fontSize: "0.85rem", color: "#666" }}>
              Tu peux simplement sauter des lignes : chaque double retour à la ligne s&apos;affichera comme un nouveau paragraphe.
            </p>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>
              URL de la photo<br />
              <input
                type="text"
                name="photoUrl"
                value={form.photoUrl}
                onChange={handleChange}
                placeholder="/images/equipes/ecole-de-rugby.jpg"
                style={{ width: "100%" }}
              />
            </label>

            {form.photoUrl && (
              <div style={{ marginTop: "0.5rem" }}>
                <p>Prévisualisation :</p>
                <img
                  src={form.photoUrl}
                  alt="Prévisualisation de l'équipe"
                  style={{
                    maxWidth: "260px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            )}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>
              Entraînements<br />
              <textarea
                name="entrainements"
                value={form.entrainements}
                onChange={handleChange}
                rows={3}
                style={{ width: "100%", resize: "vertical" }}
                placeholder="Ex : Mardi & jeudi 18h–19h30 – Stade des Orions…"
              />
            </label>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label>
              Staff (entraîneurs, dirigeants…)<br />
              <textarea
                name="staff"
                value={form.staff}
                onChange={handleChange}
                rows={3}
                style={{ width: "100%", resize: "vertical" }}
              />
            </label>
          </div>

          <button type="submit" disabled={saving}>
            {saving ? "Enregistrement..." : "Enregistrer"}
          </button>
        </form>
      )}
    </main>
  );
}
