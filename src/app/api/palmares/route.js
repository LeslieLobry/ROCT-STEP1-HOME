import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

// TODO: brancher ici ta vraie vérif admin quand tu auras un système d'auth
async function isAdmin() {
  // pour le moment on laisse tout passer
  return true;
}

export async function GET() {
  const entries = await prisma.palmares.findMany({
    orderBy: [{ saison: "asc" }, { ordre: "asc" }, { id: "asc" }],
  });
  return NextResponse.json(entries);
}

export async function POST(req) {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
  }

  const { saison, description, ordre } = await req.json();

  if (!saison || !description) {
    return NextResponse.json(
      { message: "Saison et description obligatoires" },
      { status: 400 }
    );
  }

  const entry = await prisma.palmares.create({
    data: {
      saison: saison.trim(),
      description: description.trim(),
      ordre: ordre ?? 0,
    },
  });

  return NextResponse.json(entry, { status: 201 });
}

export async function DELETE(req) {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));

  if (!id) {
    return NextResponse.json({ message: "id manquant" }, { status: 400 });
  }

  await prisma.palmares.delete({ where: { id } });

  return NextResponse.json({ ok: true });
}
