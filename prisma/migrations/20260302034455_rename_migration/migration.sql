/*
  Warnings:

  - You are about to drop the column `userId` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `Accounts_userId_fkey`;

-- DropIndex
DROP INDEX `Accounts_userId_idx` ON `accounts`;

-- DropIndex
DROP INDEX `Accounts_userId_key` ON `accounts`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `userId`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Accounts_user_id_key` ON `Accounts`(`user_id`);

-- CreateIndex
CREATE INDEX `Accounts_user_id_idx` ON `Accounts`(`user_id`);

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
