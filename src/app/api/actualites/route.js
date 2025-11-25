// src/app/api/actualites/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/** Petite fonction pour générer un slug à partir du titre */
function slugify(str) {
  return str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// GET /api/actualites -> liste publique (publiées)
export async function GET() {
  const actualites = await prisma.actualite.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(actualites);
}

// POST /api/actualites -> créer (pour l’admin)
export async function POST(req) {
  try {
    const { titre, chapo, contenu, published = true } = await req.json();

    if (!titre) {
      return NextResponse.json(
        { error: "Le titre est obligatoire" },
        { status: 400 }
      );
    }

    let slug = slugify(titre);

    // s’assurer que le slug est unique
    const existing = await prisma.actualite.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    const actu = await prisma.actualite.create({
      data: {
        titre,
        chapo: chapo || null,
        contenu: contenu || null,
        published,
        slug,
      },
    });

    return NextResponse.json(actu, { status: 201 });
  } catch (err) {
    console.error("POST /api/actualites error", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
