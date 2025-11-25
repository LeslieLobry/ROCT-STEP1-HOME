"use client";
import { useMemo, useState } from "react";
import styles from "./contact.module.css";

const CATEGORIES = [
  "Renseignements club",
  "Partenariats / sponsors",
  "École de Rugby",
  "Équipes (Seniors / Féminines / Jeunes)",
  "Rugby Loisir",
  "Rugby à 5",
  "Autre",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: "", prenom: "", telephone: "",
    email: "", adresse: "", codePostal: "", ville: "",
    sujet: CATEGORIES[0], message: "",
    rgpd: false, website: "" // honeypot
  });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Envoi en cours..." });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Une erreur est survenue.");
      setStatus({ state: "success", msg: "Merci ! Votre message a bien été envoyé." });
      setForm({
        nom: "", prenom: "", telephone: "",
        email: "", adresse: "", codePostal: "", ville: "",
        sujet: CATEGORIES[0], message: "", rgpd: false, website: ""
      });
    } catch (err) {
      setStatus({ state: "error", msg: err.message || "Échec de l’envoi." });
    }
  };

  const consentText = useMemo(() =>
    "En soumettant ce formulaire j’accepte que les informations saisies soient " +
    "exploitées dans le cadre de la gestion de la relation club et d’envoi " +
    "d’informations liées au ROCT.", []);

  return (
    <main className={styles.wrapper}>
      <section className={styles.header}>
        <h1>Contact</h1>
        <p className={styles.lead}>
          Besoin d’une info, d’un rendez-vous, ou envie de devenir partenaire ? Écrivez-nous.
        </p>
      </section>

      <section className={styles.grid}>
        {/* Formulaire */}
        <form onSubmit={onSubmit} className={styles.card} noValidate>
          {/* Honeypot anti-spam */}
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="website">Votre site (laisser vide)</label>
            <input id="website" name="website" value={form.website} onChange={onChange} />
          </div>

          <h2>Vos coordonnées</h2>
          <div className={styles.row2}>
            <div className={styles.field}>
              <label htmlFor="nom">Nom *</label>
              <input id="nom" name="nom" required minLength={2} value={form.nom} onChange={onChange} />
            </div>
            <div className={styles.field}>
              <label htmlFor="prenom">Prénom</label>
              <input id="prenom" name="prenom" value={form.prenom} onChange={onChange} />
            </div>
          </div>

          <div className={styles.row2}>
            <div className={styles.field}>
              <label htmlFor="telephone">Téléphone *</label>
              <input id="telephone" name="telephone" required inputMode="tel" value={form.telephone} onChange={onChange} />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Adresse e-mail *</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="adresse">Adresse</label>
            <input id="adresse" name="adresse" value={form.adresse} onChange={onChange} />
          </div>

          <div className={styles.row2}>
            <div className={styles.field}>
              <label htmlFor="codePostal">Code postal</label>
              <input id="codePostal" name="codePostal" inputMode="numeric" maxLength={10} value={form.codePostal} onChange={onChange} />
            </div>
            <div className={styles.field}>
              <label htmlFor="ville">Ville</label>
              <input id="ville" name="ville" value={form.ville} onChange={onChange} />
            </div>
          </div>

          <h2>Votre message</h2>
          <div className={styles.field}>
            <label htmlFor="sujet">Votre demande concerne *</label>
            <select id="sujet" name="sujet" required value={form.sujet} onChange={onChange}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows={6} required minLength={10}
              placeholder="Expliquez votre demande…" value={form.message} onChange={onChange} />
          </div>

          <label className={styles.check}>
            <input type="checkbox" name="rgpd" checked={form.rgpd} onChange={onChange} required />
            <span>{consentText}</span>
          </label>

          <div className={styles.actions}>
            <button type="submit" disabled={status.state === "loading"} className={styles.button}>
              {status.state === "loading" ? "Envoi…" : "Envoyer"}
            </button>
            {status.msg && (
              <p className={
                status.state === "success" ? styles.success :
                status.state === "error" ? styles.error : styles.muted
              }>
                {status.msg}
              </p>
            )}
          </div>
        </form>

        {/* Bloc coordonnées + infos pratiques */}
        <aside className={styles.card}>
          <h2>Coordonnées</h2>
          <p>
            Kamel LEDRAA : <a href="tel:+33673485666">06&nbsp;73&nbsp;48&nbsp;56&nbsp;66</a><br />
            267 Rue de Roncq<br />
            59200 Tourcoing
          </p>

          <p className={styles.mapLink}>
            <a href="https://goo.gl/maps/" target="_blank" rel="noopener noreferrer">
              Voir le plan d’accès
            </a>
          </p>

          <h3>Infos pratiques</h3>
          <ul className={styles.list}>
            <li><strong>Parking :</strong> Entrée parking Rue des Orions</li>
            <li><strong>Bus :</strong> L17 arrêt Racine • L4 arrêt Anatole France • L4, 84, CIT3, CIT4 arrêt Centre commercial (Roncq)</li>
            <li><strong>Métro :</strong> L1 Station Colbert (1,7 km) • Phalempins (1,6 km)</li>
          </ul>
          <p className={styles.sourceNote}>Infos inspirées de la page contact du ROCT.</p>
        </aside>
      </section>
    </main>
  );
}
