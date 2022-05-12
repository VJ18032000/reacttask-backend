-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2022 at 11:40 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crib`
--

-- --------------------------------------------------------

--
-- Table structure for table `crib_table`
--

CREATE TABLE `crib_table` (
  `id` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `img` varchar(225) NOT NULL,
  `location` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `crib_table`
--

INSERT INTO `crib_table` (`id`, `name`, `img`, `location`) VALUES
(1, 'Amygdala homes', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb1.2.1&w=1000&q=80', 'manali'),
(2, 'Fairbanks Ltd', 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb1.2.1&w=1000&q=80', 'Pondicherry'),
(3, 'Dale homes', 'https://i.pinimg.com/736x/2f/82/39/2f823993ba069d0aa966144e6f20d459.jpg', 'Trichy'),
(4, 'Triptico Proper', 'https://media.gettyimages.com/photos/idyllic-home-with-covered-porchpictureid479767332?s=612x612', 'Madurai'),
(5, 'MC homes', 'https://images.livemint.com/img/2019/04/16/600x338/Kerala_1555430371601.jpg', 'Kanyakumari');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crib_table`
--
ALTER TABLE `crib_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crib_table`
--
ALTER TABLE `crib_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
