/*
  Warnings:

  - A unique constraint covering the columns `[email_client]` on the table `client` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `email_client` ON `client`(`email_client`);

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `client_ibfk_1` FOREIGN KEY (`company_id_client`) REFERENCES `company`(`id_company`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice` ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`company_id_invoice`) REFERENCES `company`(`id_company`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice` ADD CONSTRAINT `invoice_ibfk_2` FOREIGN KEY (`client_id_invoice`) REFERENCES `client`(`id_client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice_item` ADD CONSTRAINT `invoice_item_ibfk_1` FOREIGN KEY (`invoice_id_invoice_item`) REFERENCES `invoice`(`id_invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice_item` ADD CONSTRAINT `invoice_item_ibfk_2` FOREIGN KEY (`product_id_invoice_item`) REFERENCES `product`(`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`company_id_product`) REFERENCES `company`(`id_company`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`supplier_id_product`) REFERENCES `supplier`(`id_supplier`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `supplier` ADD CONSTRAINT `supplier_ibfk_1` FOREIGN KEY (`company_id_supplier`) REFERENCES `company`(`id_company`) ON DELETE NO ACTION ON UPDATE NO ACTION;
