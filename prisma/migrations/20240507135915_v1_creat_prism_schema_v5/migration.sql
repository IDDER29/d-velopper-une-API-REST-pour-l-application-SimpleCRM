-- CreateTable
CREATE TABLE `client` (
    `id_client` VARCHAR(191) NOT NULL,
    `first_name_client` VARCHAR(191) NOT NULL,
    `last_name_client` VARCHAR(191) NOT NULL,
    `address_line1_client` VARCHAR(191) NOT NULL,
    `address_line2_client` VARCHAR(191) NULL,
    `postal_code_client_client` VARCHAR(191) NOT NULL,
    `city_client` VARCHAR(191) NOT NULL,
    `phone_number_client` VARCHAR(191) NOT NULL,
    `email_client` VARCHAR(191) NOT NULL,
    `company_id_client` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `id_client`(`id_client`),
    INDEX `company_id_client`(`company_id_client`),
    PRIMARY KEY (`id_client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company` (
    `id_company` VARCHAR(191) NOT NULL,
    `name_company` VARCHAR(191) NOT NULL,
    `address_line1_company` VARCHAR(191) NOT NULL,
    `address_line2_company` VARCHAR(191) NULL,
    `postal_code_company` VARCHAR(191) NOT NULL,
    `city_company` VARCHAR(191) NOT NULL,
    `creation_date_company` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tax_identifier_company` VARCHAR(191) NULL,
    `capital_company` DOUBLE NOT NULL,
    `number_of_employees_company` INTEGER NOT NULL,
    `responsible_name_company` VARCHAR(191) NOT NULL,
    `phone_number_company` VARCHAR(191) NOT NULL,
    `email_company` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `email_company`(`email_company`),
    PRIMARY KEY (`id_company`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoice` (
    `id_invoice` VARCHAR(191) NOT NULL,
    `created_at_invoice` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `due_date_invoice` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `amount_invoice` DOUBLE NOT NULL,
    `company_id_invoice` VARCHAR(191) NOT NULL,
    `client_id_invoice` VARCHAR(191) NOT NULL,

    INDEX `client_id_invoice`(`client_id_invoice`),
    INDEX `company_id_invoice`(`company_id_invoice`),
    PRIMARY KEY (`id_invoice`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoice_item` (
    `id_invoice_item` VARCHAR(191) NOT NULL,
    `invoice_id_invoice_item` VARCHAR(191) NOT NULL,
    `product_id_invoice_item` VARCHAR(191) NOT NULL,

    INDEX `invoice_id_invoice_item`(`invoice_id_invoice_item`),
    INDEX `product_id_invoice_item`(`product_id_invoice_item`),
    PRIMARY KEY (`id_invoice_item`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id_product` VARCHAR(191) NOT NULL,
    `name_product` VARCHAR(191) NOT NULL,
    `purchase_price_product` DOUBLE NOT NULL,
    `sale_price_product` DOUBLE NOT NULL,
    `company_id_product` VARCHAR(191) NOT NULL,
    `supplier_id_product` VARCHAR(191) NOT NULL,

    INDEX `company_id_product`(`company_id_product`),
    INDEX `supplier_id_product`(`supplier_id_product`),
    PRIMARY KEY (`id_product`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `supplier` (
    `id_supplier` VARCHAR(191) NOT NULL,
    `supplier_fullNmae_supplier` VARCHAR(191) NOT NULL,
    `address_line1_supplier` VARCHAR(191) NOT NULL,
    `address_line2_supplier` VARCHAR(191) NULL,
    `postal_code_supplier` VARCHAR(191) NOT NULL,
    `city_supplier` VARCHAR(191) NOT NULL,
    `phone_number_supplier` VARCHAR(191) NOT NULL,
    `email_supplier` VARCHAR(191) NOT NULL,
    `company_id_supplier` VARCHAR(191) NULL,

    INDEX `company_id_supplier`(`company_id_supplier`),
    PRIMARY KEY (`id_supplier`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
