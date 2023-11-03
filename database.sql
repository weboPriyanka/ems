-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 03, 2023 at 05:01 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `salary` bigint NOT NULL,
  `joining_date` date NOT NULL,
  `relieving_date` date NOT NULL,
  `contact` varchar(20) NOT NULL,
  `status` enum('Active','Inactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Active',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `dob`, `salary`, `joining_date`, `relieving_date`, `contact`, `status`, `created_at`, `modified_at`) VALUES
(1, 'Tamekah Knight', '1982-09-02', 15000, '2019-02-18', '1972-01-16', '6778978797', 'Active', '2023-10-25 15:28:09', '2023-10-25 16:27:55'),
(4, 'Tad Hatfield', '2008-06-17', 17000, '1992-01-24', '2011-03-16', '9128798730', 'Active', '2023-10-25 15:33:47', '2023-10-25 16:28:17'),
(5, 'Gregory Robbins', '1979-03-24', 70000, '1973-02-17', '1992-07-02', '9128798787', 'Active', '2023-10-25 15:37:35', '2023-10-25 16:28:25'),
(7, 'Komal Yadav', '2000-02-10', 30000, '2023-10-10', '2023-10-10', '8987897897', 'Active', '2023-11-03 04:53:02', '2023-11-03 04:59:52'),
(8, 'Wylie Nelson', '2007-02-03', 96, '2013-12-29', '2023-10-29', '70', 'Inactive', '2023-11-03 04:55:45', '2023-11-03 04:55:45'),
(9, 'Erich Tate', '1977-10-17', 38, '2001-09-14', '1987-06-01', '22', 'Active', '2023-11-03 05:00:44', '2023-11-03 05:00:55');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
