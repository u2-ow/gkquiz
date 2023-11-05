/*
  Warnings:

  - You are about to drop the `Japanse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Japanse";

-- CreateTable
CREATE TABLE "Japanese" (
    "id" SERIAL NOT NULL,
    "questionTitle" TEXT NOT NULL,
    "questionAnswer" TEXT NOT NULL,

    CONSTRAINT "Japanese_pkey" PRIMARY KEY ("id")
);
