/*
  Warnings:

  - Made the column `creation_date` on table `company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `capital` on table `company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `invoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `due_date` on table `invoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `amount` on table `invoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_paid` on table `invoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `company_id` on table `invoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `client_id` on table `invoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `invoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sale_price` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `stock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `stock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `company_id` on table `stock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_name` on table `supplier` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `supplier` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address_line1` on table `supplier` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postal_code` on table `supplier` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `supplier` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone_number` on table `supplier` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `supplier` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `company` MODIFY `creation_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `capital` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `invoice` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `due_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `amount` DOUBLE NOT NULL,
    MODIFY `is_paid` BOOLEAN NOT NULL,
    MODIFY `company_id` VARCHAR(191) NOT NULL,
    MODIFY `client_id` VARCHAR(191) NOT NULL,
    MODIFY `product_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `sale_price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `stock` MODIFY `quantity` INTEGER NOT NULL,
    MODIFY `product_id` VARCHAR(191) NOT NULL,
    MODIFY `company_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `supplier` MODIFY `first_name` VARCHAR(191) NOT NULL,
    MODIFY `last_name` VARCHAR(191) NOT NULL,
    MODIFY `address_line1` VARCHAR(191) NOT NULL,
    MODIFY `postal_code` VARCHAR(191) NOT NULL,
    MODIFY `city` VARCHAR(191) NOT NULL,
    MODIFY `phone_number` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `client_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice` ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice` ADD CONSTRAINT `invoice_ibfk_2` FOREIGN KEY (`client_id`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice` ADD CONSTRAINT `invoice_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice_item` ADD CONSTRAINT `invoice_item_ibfk_1` FOREIGN KEY (`invoice_id`) REFERENCES `invoice`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice_item` ADD CONSTRAINT `invoice_item_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `supplier`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `supplier` ADD CONSTRAINT `supplier_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
