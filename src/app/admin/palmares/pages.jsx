"use client";

import { useEffect, useState } from "react";

export default function AdminPalmaresPage() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saison, setSaison] = useState("");
  const [description, setDescription] = useState("");
  const [ordre, setOrdre] = useState("");
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/palmares");
    const data = await res.json();
    setEntries(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    await fetch("/api/palmares", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        saison,
        description,
        ordre: ordre ? Number(ordre) : 0,
      }),
    });

    setSaison("");
    setDescription("");
    setOrdre("");
    setSaving(false);
    load();
  }

  async function handleDelete(id) {
    if (!window.confirm("Supprimer cette ligne de palmarès ?")) return;

    await fetch(`/api/palmares?id=${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div style={{ padding: "2rem 6vw" }}>
      <h1>Admin – Palmarès</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", maxWidth: 600 }}>
        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Saison
            <input
              type="text"
              value={saison}
              onChange={(e) => setSaison(e.target.value)}
              placeholder="1962-1963, 2023-2024..."
              style={{ display: "block", width: "100%", padding: "0.4rem" }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              style={{ display: "block", width: "100%", padding: "0.4rem" }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Ordre (optionnel)
            <input
              type="number"
              value={ordre}
              onChange={(e) => setOrdre(e.target.value)}
              style={{ display: "block", width: "100%", padding: "0.4rem" }}
            />
          </label>
        </div>

        <button type="submit" disabled={saving}>
          {saving ? "Enregistrement..." : "Ajouter une ligne"}
        </button>
      </form>

      <h2>Lignes existantes</h2>
      {loading ? (
        <p>Chargement…</p>
      ) : entries.length === 0 ? (
        <p>Aucune ligne pour l’instant.</p>
      ) : (
        <ul>
          {entries
            .sort((a, b) =>
              a.saison === b.saison
                ? a.ordre - b.ordre || a.id - b.id
                : a.saison < b.saison
                ? 1
                : -1
            )
            .map((e) => (
              <li key={e.id} style={{ marginBottom: "0.4rem" }}>
                <strong>{e.saison}</strong> – {e.description}{" "}
                <button onClick={() => handleDelete(e.id)}>Supprimer</button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
