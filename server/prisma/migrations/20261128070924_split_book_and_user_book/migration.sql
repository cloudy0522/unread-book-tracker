/*
  Warnings:

  - You are about to drop the column `dueDate` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `isAbandoned` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `lastReadAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `nowPage` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `DailyGoal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title,author]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userBookId,goalDate]` on the table `DailyGoal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userBookId` to the `DailyGoal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_userId_fkey";

-- DropForeignKey
ALTER TABLE "DailyGoal" DROP CONSTRAINT "DailyGoal_bookId_fkey";

-- DropIndex
DROP INDEX "DailyGoal_bookId_goalDate_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "dueDate",
DROP COLUMN "isAbandoned",
DROP COLUMN "lastReadAt",
DROP COLUMN "nowPage",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "DailyGoal" DROP COLUMN "bookId",
ADD COLUMN     "userBookId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserBook" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "nowPage" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" DATE,
    "lastReadAt" TIMESTAMP(3),
    "isAbandoned" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserBook_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserBook_userId_bookId_key" ON "UserBook"("userId", "bookId");

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_author_key" ON "Book"("title", "author");

-- CreateIndex
CREATE UNIQUE INDEX "DailyGoal_userBookId_goalDate_key" ON "DailyGoal"("userBookId", "goalDate");

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyGoal" ADD CONSTRAINT "DailyGoal_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE CASCADE ON UPDATE CASCADE;
