"use client";

import { useEffect, useState } from "react";

export default function AdminHistoriquePage() {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/historique");
        const data = await res.json();
        setTitle(data.title);
        setIntro(data.intro);
        setBody(data.body);
      } catch {
        setMessage("Erreur de chargement.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/historique", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, intro, body }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setMessage("Contenu mis à jour ✔️");
    } catch (err) {
      setMessage(err.message);
    }

    setSaving(false);
  }

  if (loading) return <p>Chargement…</p>;

  return (
    <main className="admin-container">
      <h1>Admin – Page Historique</h1>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <label>Titre</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Introduction</label>
        <textarea value={intro} onChange={(e) => setIntro(e.target.value)} />

        <label>Contenu HTML</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={20}
          required
        />

        <button type="submit" disabled={saving}>
          {saving ? "Sauvegarde…" : "Enregistrer"}
        </button>
      </form>
    </main>
  );
}
