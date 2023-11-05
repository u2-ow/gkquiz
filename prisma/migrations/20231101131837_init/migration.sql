/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable


-- CreateTable
CREATE TABLE "Japanse" (
    "id" SERIAL NOT NULL,
    "questionTitle" TEXT NOT NULL,
    "questionAnswer" TEXT NOT NULL,

    CONSTRAINT "Japanse_pkey" PRIMARY KEY ("id")
);
