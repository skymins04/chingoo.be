-- CreateTable
CREATE TABLE "Receipt" (
    "id" TEXT NOT NULL,
    "tossId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "receiverName" TEXT NOT NULL,
    "remitterName" TEXT NOT NULL,
    "remitterTitle" TEXT,
    "method" TEXT,
    "footerMessage" TEXT,
    "isShowDate" BOOLEAN,
    "isShowId" BOOLEAN,
    "priceRows" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);
