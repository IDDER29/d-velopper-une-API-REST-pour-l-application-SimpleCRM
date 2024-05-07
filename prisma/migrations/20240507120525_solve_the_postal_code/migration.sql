/*
  Warnings:

  - You are about to drop the column `postal_code` on the `client` table. All the data in the column will be lost.
  - Added the required column `postal_code_client` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` DROP COLUMN `postal_code`,
    ADD COLUMN `postal_code_client` VARCHAR(191) NOT NULL;

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
