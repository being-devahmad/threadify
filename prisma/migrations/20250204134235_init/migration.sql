-- DropForeignKey
ALTER TABLE `Follow` DROP FOREIGN KEY `Follow_userId_fkey`;

-- DropIndex
DROP INDEX `Follow_userId_fkey` ON `Follow`;
