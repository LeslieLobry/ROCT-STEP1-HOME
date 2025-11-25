// src/app/api/actualites/[id]/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { slugify } from "@/lib/slugify"; // optionnel, ou recoller la fonction

// Si tu ne veux pas de fichier slugify séparé, recopie la fonction ici
function localSlugify(str) {
  return str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// PUT /api/actualites/[id] -> mise à jour
export async function PUT(req, { params }) {
  const id = Number(params.id);

  try {
    const { titre, chapo, contenu, published } = await req.json();

    if (!titre) {
      return NextResponse.json(
        { error: "Le titre est obligatoire" },
        { status: 400 }
      );
    }

    const actuExist = await prisma.actualite.findUnique({ where: { id } });
    if (!actuExist) {
      return NextResponse.json(
        { error: "Actualité introuvable" },
        { status: 404 }
      );
    }

    let slug = actuExist.slug;
    if (titre !== actuExist.titre) {
      slug = localSlugify(titre);
      const existing = await prisma.actualite.findFirst({
        where: { slug, id: { not: id } },
      });
      if (existing) slug = `${slug}-${Date.now()}`;
    }

    const actu = await prisma.actualite.update({
      where: { id },
      data: {
        titre,
        chapo: chapo || null,
        contenu: contenu || null,
        published: typeof published === "boolean" ? published : actuExist.published,
        slug,
      },
    });

    return NextResponse.json(actu);
  } catch (err) {
    console.error("PUT /api/actualites/[id] error", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// DELETE /api/actualites/[id]
export async function DELETE(_req, { params }) {
  const id = Number(params.id);

  try {
    await prisma.actualite.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/actualites/[id] error", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
