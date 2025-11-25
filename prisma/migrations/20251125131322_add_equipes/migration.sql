-- CreateTable
CREATE TABLE "Equipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "categorie" TEXT,
    "accroche" TEXT,
    "contenu" TEXT,
    "photoUrl" TEXT,
    "entrainements" TEXT,
    "staff" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Equipe_slug_key" ON "Equipe"("slug");
