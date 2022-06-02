-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2022 at 08:49 AM
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
-- Database: `pos_inv_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblcategories`
--

CREATE TABLE `tblcategories` (
  `prod_cat_id` int(11) NOT NULL,
  `prod_cat_desc` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblcustomers`
--

CREATE TABLE `tblcustomers` (
  `customer_id` int(11) NOT NULL,
  `cust_name` varchar(55) NOT NULL,
  `cust_contactNo` varchar(55) NOT NULL,
  `cust_address` varchar(55) NOT NULL,
  `cust_email` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblinventory`
--

CREATE TABLE `tblinventory` (
  `inventory_id` int(11) NOT NULL,
  `inventory_name` varchar(55) NOT NULL,
  `inventory_start` date NOT NULL,
  `inventory_end` date NOT NULL,
  `prod_count` int(11) NOT NULL,
  `inventory_grossValue` double NOT NULL,
  `inventory_varianceValue` double NOT NULL,
  `inventory_netValue` double NOT NULL,
  `inventory_validated` varchar(55) NOT NULL,
  `inventory_validationDate` date NOT NULL,
  `inventory_forwarded` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblinventorydetails`
--

CREATE TABLE `tblinventorydetails` (
  `inventory_detailID` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `inventory_transDate` date NOT NULL,
  `inventory_id` int(11) NOT NULL,
  `transactionType_ID` int(11) NOT NULL,
  `trans_id` varchar(55) NOT NULL,
  `inventory_detail_debit` int(11) NOT NULL,
  `inventory_detail_credit` int(11) NOT NULL,
  `inventory_detail_balance` int(11) NOT NULL,
  `inventory_detail_remarks` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbllastissuedno`
--

CREATE TABLE `tbllastissuedno` (
  `YearIssued` int(11) NOT NULL,
  `purchase_no` varchar(55) NOT NULL,
  `sales_no` varchar(55) NOT NULL,
  `purchase_returnsNo` varchar(55) NOT NULL,
  `sales_returnNo` varchar(55) NOT NULL,
  `payment_no` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblproducts`
--

CREATE TABLE `tblproducts` (
  `prod_id` int(11) NOT NULL,
  `prod_code` varchar(55) NOT NULL,
  `prod_cat_id` int(11) NOT NULL,
  `prod_name` varchar(55) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `prod_desc` varchar(55) NOT NULL,
  `prod_Uprice` double NOT NULL,
  `prod_Sprice` double NOT NULL,
  `prod_qty` int(11) NOT NULL,
  `prod_reorder_level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblpurchasereturns`
--

CREATE TABLE `tblpurchasereturns` (
  `purchaseReturn_ID` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `purchaseReturn_No` varchar(55) NOT NULL,
  `purchaseReturn_qty` int(11) NOT NULL,
  `purchaseReturn_reason` varchar(55) DEFAULT NULL,
  `purchaseReturn_date` date NOT NULL,
  `trans_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblpurchases`
--

CREATE TABLE `tblpurchases` (
  `purchase_id` int(11) NOT NULL,
  `purchase_no` varchar(55) NOT NULL,
  `purchase_date` date NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `purchase_grossAmount` double NOT NULL,
  `purchase_discount` double NOT NULL,
  `purchase_netAmount` double NOT NULL,
  `purchase_dueDate` date NOT NULL,
  `purchase_dateRecorded` date NOT NULL,
  `purchase_VATamount` double NOT NULL,
  `VAT_transID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblpurchasesdetails`
--

CREATE TABLE `tblpurchasesdetails` (
  `pDetail_id` int(11) NOT NULL,
  `purchase_id` int(11) NOT NULL,
  `pDetail_qty` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `pDetail_gross` double NOT NULL,
  `pDetail_discRate` double NOT NULL,
  `pDetail_discAmount` double NOT NULL,
  `pDetail_netPrice` double NOT NULL,
  `pDetail_totalDisc` double NOT NULL,
  `pDetail_amount` double NOT NULL,
  `pDetail_remarks` varchar(55) NOT NULL,
  `pDetail_VATamount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblsales`
--

CREATE TABLE `tblsales` (
  `sales_id` int(11) NOT NULL,
  `sales_no` varchar(55) NOT NULL,
  `sales_date` date NOT NULL,
  `customer_id` int(11) NOT NULL,
  `sales_GrossAmount` double NOT NULL,
  `sales_totalDiscount` double NOT NULL,
  `sales_netAmount` double NOT NULL,
  `sales_payment` varchar(55) NOT NULL,
  `sales_balance` double NOT NULL,
  `sales_dueDate` date NOT NULL,
  `date_recorded` date NOT NULL,
  `sales_VATamount` double NOT NULL,
  `VAT_transID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblsalesdetails`
--

CREATE TABLE `tblsalesdetails` (
  `sdetail_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `sales_id` int(11) NOT NULL,
  `sdetail_qty` int(11) NOT NULL,
  `sdetail_gross` double NOT NULL,
  `sdetail_discRate` double NOT NULL,
  `sdetail_discAmount` double NOT NULL,
  `sdetail_totalDisc` double NOT NULL,
  `sdetail_netPrice` double NOT NULL,
  `sdetail_amount` double NOT NULL,
  `sdetail_remarks` varchar(55) NOT NULL,
  `sdetail_VATamount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblsalesreturns`
--

CREATE TABLE `tblsalesreturns` (
  `salesReturn_id` int(11) NOT NULL,
  `salesReturn_No` varchar(55) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `salesReturn_qty` int(11) NOT NULL,
  `salesReturn_reason` varchar(55) DEFAULT NULL,
  `salesReturn_date` date NOT NULL,
  `sales_id` int(11) DEFAULT NULL,
  `trans_id` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblsuppliers`
--

CREATE TABLE `tblsuppliers` (
  `supplier_id` int(11) NOT NULL,
  `supplier_name` varchar(55) NOT NULL,
  `supplier_address` varchar(55) NOT NULL,
  `supplier_contactNo` varchar(55) NOT NULL,
  `supplier_email` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbltranstype`
--

CREATE TABLE `tbltranstype` (
  `transactionType_id` int(11) NOT NULL,
  `transactionType_Desc` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblvattransactions`
--

CREATE TABLE `tblvattransactions` (
  `VAT_transID` int(11) NOT NULL,
  `VAT_desc` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblcategories`
--
ALTER TABLE `tblcategories`
  ADD PRIMARY KEY (`prod_cat_id`);

--
-- Indexes for table `tblcustomers`
--
ALTER TABLE `tblcustomers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `tblinventory`
--
ALTER TABLE `tblinventory`
  ADD PRIMARY KEY (`inventory_id`);

--
-- Indexes for table `tblinventorydetails`
--
ALTER TABLE `tblinventorydetails`
  ADD PRIMARY KEY (`inventory_detailID`);

--
-- Indexes for table `tblproducts`
--
ALTER TABLE `tblproducts`
  ADD PRIMARY KEY (`prod_id`);

--
-- Indexes for table `tblpurchasereturns`
--
ALTER TABLE `tblpurchasereturns`
  ADD PRIMARY KEY (`purchaseReturn_ID`);

--
-- Indexes for table `tblpurchases`
--
ALTER TABLE `tblpurchases`
  ADD PRIMARY KEY (`purchase_id`);

--
-- Indexes for table `tblpurchasesdetails`
--
ALTER TABLE `tblpurchasesdetails`
  ADD PRIMARY KEY (`pDetail_id`);

--
-- Indexes for table `tblsales`
--
ALTER TABLE `tblsales`
  ADD PRIMARY KEY (`sales_id`);

--
-- Indexes for table `tblsalesdetails`
--
ALTER TABLE `tblsalesdetails`
  ADD PRIMARY KEY (`sdetail_id`);

--
-- Indexes for table `tblsalesreturns`
--
ALTER TABLE `tblsalesreturns`
  ADD PRIMARY KEY (`salesReturn_id`);

--
-- Indexes for table `tblsuppliers`
--
ALTER TABLE `tblsuppliers`
  ADD PRIMARY KEY (`supplier_id`);

--
-- Indexes for table `tbltranstype`
--
ALTER TABLE `tbltranstype`
  ADD PRIMARY KEY (`transactionType_id`);

--
-- Indexes for table `tblvattransactions`
--
ALTER TABLE `tblvattransactions`
  ADD PRIMARY KEY (`VAT_transID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblcategories`
--
ALTER TABLE `tblcategories`
  MODIFY `prod_cat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblcustomers`
--
ALTER TABLE `tblcustomers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblinventory`
--
ALTER TABLE `tblinventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblinventorydetails`
--
ALTER TABLE `tblinventorydetails`
  MODIFY `inventory_detailID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblproducts`
--
ALTER TABLE `tblproducts`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblpurchasereturns`
--
ALTER TABLE `tblpurchasereturns`
  MODIFY `purchaseReturn_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblpurchases`
--
ALTER TABLE `tblpurchases`
  MODIFY `purchase_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblpurchasesdetails`
--
ALTER TABLE `tblpurchasesdetails`
  MODIFY `pDetail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblsales`
--
ALTER TABLE `tblsales`
  MODIFY `sales_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblsalesdetails`
--
ALTER TABLE `tblsalesdetails`
  MODIFY `sdetail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblsalesreturns`
--
ALTER TABLE `tblsalesreturns`
  MODIFY `salesReturn_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblsuppliers`
--
ALTER TABLE `tblsuppliers`
  MODIFY `supplier_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbltranstype`
--
ALTER TABLE `tbltranstype`
  MODIFY `transactionType_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblvattransactions`
--
ALTER TABLE `tblvattransactions`
  MODIFY `VAT_transID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
