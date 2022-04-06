-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2022 at 02:56 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblcustomer`
--

CREATE TABLE `tblcustomer` (
  `cust_id` int(100) NOT NULL,
  `user_id` int(100) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phoneNo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblinventorylog`
--

CREATE TABLE `tblinventorylog` (
  `invlog_id` int(100) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `user_id` int(100) DEFAULT NULL,
  `logDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblinvoice`
--

CREATE TABLE `tblinvoice` (
  `invoice_id` int(100) NOT NULL,
  `invoiceNo` varchar(50) DEFAULT NULL,
  `idate` datetime DEFAULT NULL,
  `TotalDue` double(100,2) DEFAULT NULL,
  `cust_id` int(100) DEFAULT NULL,
  `user_id` int(100) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblinvoiceitem`
--

CREATE TABLE `tblinvoiceitem` (
  `invitem_id` int(100) NOT NULL,
  `invItemDate` datetime DEFAULT NULL,
  `invoiceType` varchar(50) DEFAULT NULL,
  `prod_id` int(100) DEFAULT NULL,
  `qty` int(100) DEFAULT NULL,
  `subtotal` double(100,2) DEFAULT NULL,
  `discount` double(100,2) DEFAULT NULL,
  `tax_id` int(100) DEFAULT NULL,
  `vat` double(100,2) DEFAULT NULL,
  `total` double(100,2) DEFAULT NULL,
  `invoice_id` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblproduct`
--

CREATE TABLE `tblproduct` (
  `prod_id` int(100) NOT NULL,
  `barcode` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `cat_id` int(100) DEFAULT NULL,
  `unit` varchar(50) DEFAULT NULL,
  `price1` double(100,2) DEFAULT NULL,
  `price2` double(100,2) DEFAULT NULL,
  `price3` double(100,2) DEFAULT NULL,
  `qty` int(100) DEFAULT NULL,
  `reorderlvl` int(100) DEFAULT NULL,
  `drawerNo` varchar(100) DEFAULT NULL,
  `pstatus` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblproduct`
--

INSERT INTO `tblproduct` (`prod_id`, `barcode`, `name`, `description`, `cat_id`, `unit`, `price1`, `price2`, `price3`, `qty`, `reorderlvl`, `drawerNo`, `pstatus`) VALUES
(22, '555555', 'lala', 'big', 1, 'pc', 45.00, 65.00, 80.00, 200, 20, '7', 'Active'),
(28, '777777', 'SPRITE', 'KASALO', 2, 'pc', 200.00, 350.00, 445.00, 200, 20, '1', 'Active'),
(43, '8888', 'COKE ZERO', '1liter', 1, 'pc', 100.00, 150.00, 169.00, 200, 20, '1', 'Active'),
(46, '87324', 'SPRITE ', '1.5 liter', 1, 'pc', 100.00, 150.00, 169.00, 300, 32, '3', 'Active'),
(47, '345345', 'SPRITE@2', '2liter', 1, 'pc', 100.00, 150.00, 169.00, 200, 20, '1', 'Active'),
(49, '234523', 'ertertert', '3546', 1, 'pc', 345.00, 123123.00, 34534.00, 200, 321, '123', 'Active'),
(50, '345345', 'COKE ZERO345', '1liter', 1, 'pc', 345.00, 56756.00, 876.00, 678, 67, '6', 'Not Active'),
(51, '8888', '234234', '54645', 1, '23423', 4234234.00, 234234.00, 23423.00, 23423, 234234, '234', 'Not Active'),
(52, '921398892change', '345345', '345345', 1, '345ert', 45456.00, 345.00, 345.00, 45, 34, 'ertertert', 'Active'),
(53, '8888', 'asdasd', 'asdasd', 1, 'asdasd', 2345.00, 345.00, 345.00, 567, 34, '345', 'Not Active'),
(54, '123123', 'dumyy name', 'dumyy desc', 1, 'oewr', 120.00, 123.00, 130.00, 300, 15, '6', 'Active'),
(55, '7777777', 'royal', '2liters', 1, 'pc', 60.00, 70.00, 85.00, 136, 15, '7', 'Active'),
(56, '444444444', 'prodtest', 'desctest', 1, 'pc', 870.00, 980.00, 680.00, 500, 50, '8', 'Active'),
(62, '8888', 'dumyyProd', '1liter', 1, 'pc', 100.00, 150.00, 345.00, 200, 15, '123', 'Active'),
(63, '0985456546456', 'COKE ZERO', '1liter', 1, 'pc', 100.00, 150.00, 169.00, 300, 32, '123', 'Active'),
(66, '11423543', 'lala', 'dako', 1, 'box', 1000.00, 1200.00, 1300.00, 400, 20, '8', 'Active'),
(70, '8888', 'COKE ZERO', '1liter', 1, 'pc', 100.00, 150.00, 345.00, 567, 20, '6', 'Active'),
(73, '834593458', 'ritche', 'gwapo', 1, 'pc', 5000.00, 6000.00, 10000.00, 100, 10, '6', 'Active'),
(74, '345345345', 'CDO BEEF', 'small', 3, 'box', 932459.00, 3245.00, 39459.00, 4999, 299, '29', 'Active'),
(78, '222222', 'piatos', 'big', 1, 'pc', 200.00, 220.00, 250.00, 200, 20, '5', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `tblproductcategory`
--

CREATE TABLE `tblproductcategory` (
  `cat_id` int(100) NOT NULL,
  `description` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblproductcategory`
--

INSERT INTO `tblproductcategory` (`cat_id`, `description`) VALUES
(1, 'JunkFood'),
(2, 'Drink'),
(3, 'Meat'),
(4, 'Fruit'),
(5, 'Vegetables'),
(6, 'Testingedits');

-- --------------------------------------------------------

--
-- Table structure for table `tblstock`
--

CREATE TABLE `tblstock` (
  `stock_id` int(100) NOT NULL,
  `prod_id` int(100) DEFAULT NULL,
  `sprice` double(100,2) DEFAULT NULL,
  `qty` int(100) DEFAULT NULL,
  `sdate` datetime DEFAULT NULL,
  `supplier_id` int(100) DEFAULT NULL,
  `user_id` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblsupplier`
--

CREATE TABLE `tblsupplier` (
  `supplier_id` int(100) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phoneNo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblsupplier`
--

INSERT INTO `tblsupplier` (`supplier_id`, `name`, `address`, `phoneNo`) VALUES
(12, 'Manny Pacquiao', 'Gensan Malaya Otso Tres', '23432'),
(13, 'Ritche Lagnson', 'Tokyo Japan', '92222'),
(14, 'qwe', 'qwe', 'qwe');

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `user_id` int(100) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `userpass` varchar(50) DEFAULT NULL,
  `accType` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`user_id`, `name`, `username`, `userpass`, `accType`) VALUES
(6, 'Ritche D. Laganson', 'Admin', '202cb962ac59075b964b07152d234b70', 'System Administrator'),
(7, 'sample6', 'sample6', '1d1756986764035547f4a1e1a106d7d1', 'Manager'),
(8, 'sample', 'sample', '4e91b1cbe42b5c884de47d4c7fda0555', 'Cashier');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblcustomer`
--
ALTER TABLE `tblcustomer`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `tblinventorylog`
--
ALTER TABLE `tblinventorylog`
  ADD PRIMARY KEY (`invlog_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tblinvoice`
--
ALTER TABLE `tblinvoice`
  ADD PRIMARY KEY (`invoice_id`),
  ADD KEY `cust_id` (`cust_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tblinvoiceitem`
--
ALTER TABLE `tblinvoiceitem`
  ADD PRIMARY KEY (`invitem_id`),
  ADD KEY `prod_id` (`prod_id`),
  ADD KEY `invoice_id` (`invoice_id`);

--
-- Indexes for table `tblproduct`
--
ALTER TABLE `tblproduct`
  ADD PRIMARY KEY (`prod_id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `tblproductcategory`
--
ALTER TABLE `tblproductcategory`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `tblstock`
--
ALTER TABLE `tblstock`
  ADD PRIMARY KEY (`stock_id`),
  ADD KEY `prod_id` (`prod_id`),
  ADD KEY `supplier_id` (`supplier_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tblsupplier`
--
ALTER TABLE `tblsupplier`
  ADD PRIMARY KEY (`supplier_id`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblcustomer`
--
ALTER TABLE `tblcustomer`
  MODIFY `cust_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblinventorylog`
--
ALTER TABLE `tblinventorylog`
  MODIFY `invlog_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblinvoiceitem`
--
ALTER TABLE `tblinvoiceitem`
  MODIFY `invitem_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblproduct`
--
ALTER TABLE `tblproduct`
  MODIFY `prod_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `tblproductcategory`
--
ALTER TABLE `tblproductcategory`
  MODIFY `cat_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tblstock`
--
ALTER TABLE `tblstock`
  MODIFY `stock_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblsupplier`
--
ALTER TABLE `tblsupplier`
  MODIFY `supplier_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblinventorylog`
--
ALTER TABLE `tblinventorylog`
  ADD CONSTRAINT `tblinventorylog_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbluser` (`user_id`);

--
-- Constraints for table `tblinvoice`
--
ALTER TABLE `tblinvoice`
  ADD CONSTRAINT `tblinvoice_ibfk_1` FOREIGN KEY (`cust_id`) REFERENCES `tblcustomer` (`cust_id`),
  ADD CONSTRAINT `tblinvoice_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `tbluser` (`user_id`);

--
-- Constraints for table `tblinvoiceitem`
--
ALTER TABLE `tblinvoiceitem`
  ADD CONSTRAINT `tblinvoiceitem_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `tblproduct` (`prod_id`),
  ADD CONSTRAINT `tblinvoiceitem_ibfk_2` FOREIGN KEY (`invoice_id`) REFERENCES `tblinvoice` (`invoice_id`);

--
-- Constraints for table `tblproduct`
--
ALTER TABLE `tblproduct`
  ADD CONSTRAINT `tblproduct_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `tblproductcategory` (`cat_id`);

--
-- Constraints for table `tblstock`
--
ALTER TABLE `tblstock`
  ADD CONSTRAINT `tblstock_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `tblproduct` (`prod_id`),
  ADD CONSTRAINT `tblstock_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `tblsupplier` (`supplier_id`),
  ADD CONSTRAINT `tblstock_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `tbluser` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
