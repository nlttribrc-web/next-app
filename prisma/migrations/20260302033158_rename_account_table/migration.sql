-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `Account_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `Account_provider_providerAccountId_key` TO `Accounts_provider_providerAccountId_key`;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `Account_userId_idx` TO `Accounts_userId_idx`;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `Account_userId_key` TO `Accounts_userId_key`;
