import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const dynamic = "force-dynamic";

/* GET : récupère l’historique */
export async function GET() {
  const item = await prisma.historique.findFirst();

  if (!item) {
    return NextResponse.json({
      title: "Historique du ROCT",
      intro: "",
      body: "<p>Aucun contenu pour l’instant.</p>",
    });
  }

  return NextResponse.json(item);
}

/* PUT : met à jour / crée l’historique */
export async function PUT(req) {
  try {
    const { title, intro, body } = await req.json();

    if (!title || !body) {
      return NextResponse.json(
        { message: "Titre et contenu obligatoires." },
        { status: 400 }
      );
    }

    const existing = await prisma.historique.findFirst();

    if (existing) {
      await prisma.historique.update({
        where: { id: existing.id },
        data: { title, intro, body },
      });
    } else {
      await prisma.historique.create({
        data: { title, intro, body },
      });
    }

    return NextResponse.json({ message: "Historique mis à jour." });
  } catch (err) {
    console.error("Erreur PUT /api/historique :", err);
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }
}
