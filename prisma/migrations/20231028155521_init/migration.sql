-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "questionTitle" TEXT NOT NULL,
    "questionAnswer" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
