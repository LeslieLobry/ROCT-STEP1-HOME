"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminActualitesPage() {
  const [list, setList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [titre, setTitre] = useState("");
  const [chapo, setChapo] = useState("");
  const [contenu, setContenu] = useState("");
  const [published, setPublished] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Charger la liste
  useEffect(() => {
    loadActualites();
  }, []);

  async function loadActualites() {
    setLoading(true);
    try {
      const res = await fetch("/api/actualites?admin=1", { cache: "no-store" });
      const data = await res.json();
      setList(data);
    } catch {
      setMessage("Erreur de chargement des actualités.");
    } finally {
      setLoading(false);
    }
  }

  // Préremplir le formulaire pour édition
  function editActu(actu) {
    setEditingId(actu.id);
    setTitre(actu.titre || "");
    setChapo(actu.chapo || "");
    setContenu(actu.contenu || "");
    setPublished(actu.published);
    setMessage("");
  }

  // Réinitialiser le formulaire (création)
  function resetForm() {
    setEditingId(null);
    setTitre("");
    setChapo("");
    setContenu("");
    setPublished(true);
    setMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const payload = { titre, chapo, contenu, published };

    try {
      let res;
      if (editingId) {
        res = await fetch(`/api/actualites/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/actualites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l’enregistrement.");
      }

      setMessage("Actualité enregistrée ✅");
      await loadActualites();
      if (!editingId) resetForm();
    } catch (err) {
      setMessage(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Supprimer cette actualité ?")) return;
    try {
      const res = await fetch(`/api/actualites/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de la suppression.");
      }
      setMessage("Actualité supprimée 🗑️");
      await loadActualites();
      if (editingId === id) resetForm();
    } catch (err) {
      setMessage(err.message);
    }
  }

  return (
    <main style={{ maxWidth: "1100px", margin: "2rem auto", padding: "0 1.5rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/admin">
          <button type="button">← Retour à l’admin</button>
        </Link>
      </div>

      <h1>Admin – Actualités</h1>
      {message && <p>{message}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 2fr)",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {/* Liste des actualités */}
        <section>
          <h2>Liste</h2>
          {loading ? (
            <p>Chargement…</p>
          ) : list.length === 0 ? (
            <p>Aucune actualité.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {list.map((a) => (
                <li
                  key={a.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "0.6rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong>{a.titre}</strong>
                    <br />
                    <span style={{ fontSize: "0.8rem", color: "#666" }}>
                      {new Date(a.createdAt).toLocaleDateString("fr-FR")} •{" "}
                      {a.published ? "Publié" : "Brouillon"}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button type="button" onClick={() => editActu(a)}>
                      Modifier
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(a.id)}
                      style={{ color: "white", backgroundColor: "#bb262c" }}
                    >
                      Supprimer
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Formulaire */}
        <section>
          <h2>{editingId ? "Modifier l’actualité" : "Nouvelle actualité"}</h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem",
              marginTop: "0.5rem",
            }}
          >
            <label>
              Titre
              <input
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                required
              />
            </label>

            <label>
              Chapo (accroche)
              <textarea
                value={chapo}
                onChange={(e) => setChapo(e.target.value)}
                rows={2}
              />
            </label>

            <label>
              Contenu (HTML autorisé)
              <textarea
                value={contenu}
                onChange={(e) => setContenu(e.target.value)}
                rows={8}
              />
            </label>

            <label style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
              />
              Publié
            </label>

            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
              <button type="submit" disabled={saving}>
                {saving ? "Enregistrement…" : "Enregistrer"}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm}>
                  Annuler l’édition
                </button>
              )}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
