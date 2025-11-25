import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const data = [
    { saison: "1962-1963", description: "Vice Champion des Flandres Honneur - Seniors" },

    { saison: "1963-1964", description: "Vainqueur de la Coupe des Flandres - Seniors" },

    { saison: "1966-1967", description: "Vainqueur de la Coupe des Flandres - Seniors" },

    { saison: "1969-1970", description: "Champion des Flandres 2ème Série - Seniors", ordre: 1 },
    { saison: "1969-1970", description: "Champion des Flandres 2ème Série - Seniors Réserve", ordre: 2 },
    { saison: "1969-1970", description: "Qualification en 8ème de Finale du championnat de France Reichel - Juniors", ordre: 3 },

    { saison: "1974-1975", description: "Champion des Flandres 1ère Série - Seniors", ordre: 1 },
    { saison: "1974-1975", description: "Coupe des Flandres - Juniors", ordre: 2 },

    { saison: "1979-1980", description: "Vice Champion des Flandres Honneur - Seniors", ordre: 1 },
    { saison: "1979-1980", description: "Accession en 3ème Division National", ordre: 2 },

    { saison: "1981-1982", description: "3ème Division Nationale - Descente en division Honneur régionale - Seniors" },

    { saison: "1983-1984", description: "Vice Champion des Flandres Honneur - Seniors" },

    { saison: "1984-1985", description: "Champion des Flandres Honneur - Seniors", ordre: 1 },
    { saison: "1984-1985", description: "Accession en 3ème Division Nationale", ordre: 2 },

    { saison: "1985-1986", description: "3ème Division Nationale - Descente en division Honneur régionale - Seniors" },

    { saison: "1987-1988", description: "Champion des Flandres Honneur - Seniors" },

    { saison: "1994-1995", description: "U18 Vainqueur de la Coupe des Flandres (Coupe Morel)" },

    { saison: "1996-1997", description: "Champion des Flandres Première Série - Seniors" },

    { saison: "1997-1998", description: "U18 Champion des Flandres", ordre: 1 },
    { saison: "1997-1998", description: "Vice Champion Promotion Honneur - Seniors", ordre: 2 },

    { saison: "2001-2002", description: "Vice Champion Promotion Honneur - Seniors" },

    { saison: "2002-2003", description: "Vice Champion des Flandres Honneur - Seniors" },

    { saison: "2004-2005", description: "Champion des Flandres Promotion Honneur - Seniors", ordre: 1 },
    { saison: "2004-2005", description: "Champion des Flandres Promotion Honneur - Seniors Réserve", ordre: 2 },

    { saison: "2008-2009", description: "Vice Champion des Flandres Promotion Honneur - Seniors" },

    { saison: "2010-2011", description: "Compétition TEULIÈRE - Champion des Flandres CADET", ordre: 1 },
    { saison: "2010-2011", description: "Équipe entraînée par Yohan Deblock, Patrice Ferla et Antoine Godon", ordre: 2 },
    { saison: "2010-2011", description: "Rémi Picquette (Stade Rochelais / Top 14) faisait partie de cette équipe", ordre: 3 },

    { saison: "2011-2012", description: "Vice Champion des Flandres Promotion Honneur - Seniors", ordre: 1 },
    { saison: "2011-2012", description: "Champion des Flandres Promotion Honneur - Equipe Réserve", ordre: 2 },

    { saison: "2014-2015", description: "Vice Champion des Flandres Première Série - Seniors" },

    { saison: "2015-2016", description: "Vice Champion des Flandres Première Série - Seniors", ordre: 1 },
    { saison: "2015-2016", description: "Vice Champion des Flandres Première Série - Seniors Réserve", ordre: 2 },

    { saison: "2017-2018", description: "Senior Homme – Vice-Champions des Flandres de Promotion d'Honneur – Equipe 1", ordre: 1 },
    { saison: "2017-2018", description: "U18 – Vice-Champions des Flandres DANET à 12", ordre: 2 },
    { saison: "2017-2018", description: "U18 – Vice-Champions Secteur Nord-Est France DANET à 12 contre Châlons", ordre: 3 },
    { saison: "2017-2018", description: "U16 – Vainqueurs de La Coupe des Flandres", ordre: 4 },

    { saison: "2018-2019", description: "Senior Homme – Vice-Champions de la Ligue HDF Promotion d'Honneur – Equipe réserve", ordre: 1 },
    { saison: "2018-2019", description: "U18 Cadettes – Vice-Championnes des Hauts-de-France à X", ordre: 2 },
    { saison: "2018-2019", description: "U18 Cadettes – Championnes Hauts-de-France Rugby à 7", ordre: 3 },
    { saison: "2018-2019", description: "U16 – Champion des Hauts-de-France à 10 - Régionale 3", ordre: 4 },

    { saison: "2021-2022", description: "U16 Champion de la Ligue HDF - Régionale 1", ordre: 1 },
    { saison: "2021-2022", description: "Senior A : 1er de Promotion Honneur Saison Régulière", ordre: 2 },
    { saison: "2021-2022", description: "1/2 finaliste contre RC Béthune (21-28 / 20-16)", ordre: 3 },
    { saison: "2021-2022", description: "Classement final 3ème – Accession en Régionale 1", ordre: 4 },

    { saison: "2022-2023", description: "Séniors A : 5ème Promotion Honneur Saison régulière", ordre: 1 },
    { saison: "2022-2023", description: "Barrages aller/retour contre XV Bailleulois (33-40 / 28-24)", ordre: 2 },
    { saison: "2022-2023", description: "Classement final 7ème – Rétrogradation en Régionale 2", ordre: 3 },

    { saison: "2023-2024", description: "Séniors Homme – Equipe première – Champion de la Ligue HDF Régionale 2", ordre: 1 },
    { saison: "2023-2024", description: "Accession en Régionale 1", ordre: 2 },
  ];

  for (const row of data) {
    await prisma.palmares.create({ data: row });
  }

  console.log("🎉 Palmarès inséré dans la base !");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
