/*
  Warnings:

  - You are about to drop the column `providerAccountId` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `providerAccountId` on the `authenticator` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,provider_account_id]` on the table `Accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider_account_id` to the `Accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider_account_id` to the `Authenticator` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Accounts_provider_providerAccountId_key` ON `accounts`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `providerAccountId`,
    ADD COLUMN `provider_account_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `authenticator` DROP COLUMN `providerAccountId`,
    ADD COLUMN `provider_account_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Accounts_provider_provider_account_id_key` ON `Accounts`(`provider`, `provider_account_id`);
