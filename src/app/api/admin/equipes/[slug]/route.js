// src/app/api/admin/equipes/[slug]/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // si l'alias @ n'est pas configuré, remplace par ../../../../../lib/prisma

export const dynamic = "force-dynamic";

/**
 * GET /api/admin/equipes/[slug]
 * -> retourne l'équipe si elle existe en base
 */
export async function GET(req, { params }) {
  const { slug } = params;

  try {
    const equipe = await prisma.equipe.findUnique({
      where: { slug },
    });

    if (!equipe) {
      return NextResponse.json({ error: "Équipe introuvable" }, { status: 404 });
    }

    return NextResponse.json(equipe);
  } catch (err) {
    console.error("GET /api/admin/equipes error", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/admin/equipes/[slug]
 * body JSON : { nom, categorie, accroche, contenu, photoUrl, entrainements, staff }
 * -> upsert en base
 */
export async function PUT(req, { params }) {
  const { slug } = params;

  try {
    const body = await req.json();
    const {
      nom,
      categorie,
      accroche,
      contenu,
      photoUrl,
      entrainements,
      staff,
    } = body;

    if (!nom || typeof nom !== "string") {
      return NextResponse.json(
        { error: "Le champ 'nom' est obligatoire." },
        { status: 400 }
      );
    }

    const equipe = await prisma.equipe.upsert({
      where: { slug },
      update: {
        nom,
        categorie,
        accroche,
        contenu,
        photoUrl,
        entrainements,
        staff,
      },
      create: {
        slug,
        nom,
        categorie,
        accroche,
        contenu,
        photoUrl,
        entrainements,
        staff,
      },
    });

    return NextResponse.json(equipe);
  } catch (err) {
    console.error("PUT /api/admin/equipes error", err);
    return NextResponse.json(
      { error: "Erreur serveur lors de l'enregistrement." },
      { status: 500 }
    );
  }
}
