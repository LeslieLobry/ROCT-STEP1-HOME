// scripts/create-admin.cjs
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const email = "leslielobry@gmail.com";
  const plainPassword = "Anderson1989!";

  const hashed = await bcrypt.hash(plainPassword, 10);

  const admin = await prisma.admin.upsert({
    where: { email },
    update: { password: hashed },
    create: { email, password: hashed },
  });

  console.log("Admin créé / mis à jour :", admin.email);
}

main()
  .then(() => {
    console.log("OK");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
