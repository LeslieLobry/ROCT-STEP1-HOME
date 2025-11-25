export default function AdminHome() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Espace Administration</h1>
      <p>Bienvenue dans le panneau d'administration du ROCT.</p>

      <ul>
        <li><a href="/admin/historique">Gérer l'historique</a></li>
        <li><a href="/admin/palmares">Gérer le palmarès</a></li>
        <li><a href="/admin/equipes">Gérer les équipes</a></li>
      </ul>
    </main>
  );
}
