-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'OWNER', 'AUTHOR', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "email" VARCHAR(255) NOT NULL,
    "phoneVerified" TIMESTAMP(3),
    "phone" VARCHAR(255),
    "idVerified" TIMESTAMP(3),
    "password" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verificationToken" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "verificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "pinVerified" BOOLEAN NOT NULL DEFAULT false,
    "paymentReceived" BOOLEAN NOT NULL DEFAULT false,
    "websiteName" VARCHAR(255) NOT NULL,
    "websiteType" VARCHAR(255) NOT NULL,
    "websiteStartingDate" TIMESTAMP(3) NOT NULL,
    "domainRenewalDate" TIMESTAMP(3) NOT NULL,
    "platform" VARCHAR(100) NOT NULL,
    "niche" VARCHAR(255)[],
    "aboutWebsite" TEXT NOT NULL,
    "monetizationPlatform" VARCHAR(255) NOT NULL,
    "siteMonetizationDate" TIMESTAMP(3) NOT NULL,
    "monetizationCountry" VARCHAR(100) NOT NULL,
    "monthlyEarning" DOUBLE PRECISION,
    "expectedMonthlyTraffic" INTEGER,
    "lastMonthEarning" DOUBLE PRECISION,
    "lastSixMonthEarning" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Screenshot" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "listingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Screenshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BlogTags" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ListingTags" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "verificationToken_token_key" ON "verificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "_BlogTags_AB_unique" ON "_BlogTags"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogTags_B_index" ON "_BlogTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ListingTags_AB_unique" ON "_ListingTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ListingTags_B_index" ON "_ListingTags"("B");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verificationToken" ADD CONSTRAINT "verificationToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Screenshot" ADD CONSTRAINT "Screenshot_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogTags" ADD CONSTRAINT "_BlogTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogTags" ADD CONSTRAINT "_BlogTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ListingTags" ADD CONSTRAINT "_ListingTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ListingTags" ADD CONSTRAINT "_ListingTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
