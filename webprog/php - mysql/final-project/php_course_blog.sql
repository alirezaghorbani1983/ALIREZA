-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2024 at 05:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `php_course_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(1, 'nature'),
(2, 'tourism'),
(3, 'technology'),
(4, 'others');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `comment` text NOT NULL,
  `post_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `name`, `comment`, `post_id`, `status`) VALUES
(1, 'Ali', 'Egestas congue quisque egestas diam in. Tristique et egestas quis ipsum. Rhoncus mattis rhoncus urna neque viverra.', 1, 0),
(2, 'Ali', 'Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Praesent tristique magna sit amet.', 1, 1),
(3, 'Ali', 'Ipsum a arcu cursus vitae congue. Arcu ac tortor dignissim convallis aenean. Vitae tortor condimentum lacinia quis. Leo urna molestie at elementum eu.', 4, 0),
(4, 'Ali', ' Arcu odio ut sem nulla pharetra diam. Viverra nam libero justo laoreet. Cursus turpis massa tincidunt dui ut. Nisl rhoncus mattis rhoncus urna.', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `auther` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `body`, `category_id`, `auther`, `image`) VALUES
(1, 'lorem ipsum 1', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet massa vitae tortor. Aliquam malesuada bibendum arcu vitae. Risus quis varius quam quisque id diam vel quam elementum. Lacus viverra vitae congue eu consequat ac felis donec. Erat nam at lectus urna duis convallis. A condimentum vitae sapien pellentesque. In fermentum et sollicitudin ac orci phasellus egestas tellus. Donec et odio pellentesque diam. Fermentum iaculis eu non diam phasellus. Diam vel quam elementum pulvinar etiam non quam. Ornare arcu odio ut sem nulla pharetra. Integer eget aliquet nibh praesent tristique magna sit amet. Nisi quis eleifend quam adipiscing vitae proin. Erat imperdiet sed euismod nisi porta. Aliquam purus sit amet luctus venenatis lectus. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Lorem mollis aliquam ut porttitor leo a diam. Sodales neque sodales ut etiam sit amet. Facilisis sed odio morbi quis commodo odio aenean sed.', 1, 'ali sheikh', '432.jpg'),
(2, 'lorem ipsum 2', 'Sit amet mattis vulputate enim nulla aliquet porttitor. Eget aliquet nibh praesent tristique magna sit amet purus. Et malesuada fames ac turpis egestas maecenas pharetra. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Ultricies tristique nulla aliquet enim. Mauris nunc congue nisi vitae suscipit. Lectus nulla at volutpat diam ut venenatis. Ut ornare lectus sit amet. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet purus gravida quis blandit turpis cursus in. Purus semper eget duis at tellus at urna. Arcu ac tortor dignissim convallis aenean et. Risus nec feugiat in fermentum posuere urna. Faucibus interdum posuere lorem ipsum. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh', 3, 'nima mohammadi', '1534.jpg'),
(3, 'lorem ipsum 3', 'varius sit amet mattis vulputate enim nulla aliquet porttitor. Id faucibus nisl tincidunt eget nullam non. Fringilla urna porttitor rhoncus dolor purus non. Lectus urna duis convallis convallis tellus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Volutpat lacus laoreet non curabitur gravida arcu. Viverra aliquet eget sit amet tellus cras. Et netus et malesuada fames ac turpis. Et netus et malesuada fames ac turpis egestas sed. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Tincidunt id aliquet risus feugiat. At tempor commodo ullamcorper a lacus vestibulum sed. Ac turpis egestas sed tempus urna et. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Id faucibus nisl tincidunt eget nullam non. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Dictum non consectetur a erat nam at lectus. Ultrices sagittis orci a scelerisque..', 4, 'zahra mohammadi', '6.jpg'),
(4, 'lorem ipsum 4', 'Elementum nibh tellus molestie nunc non. Faucibus purus in massa tempor. Volutpat blandit aliquam etiam erat. Turpis cursus in hac habitasse platea dictumst. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Pellentesque sit amet porttitor eget. Eu mi bibendum neque egestas congue quisque. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Mauris vitae ultricies leo integer malesuada nunc. Turpis egestas integer eget aliquet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Nisl rhoncus mattis rhoncus urna neque viverra. Gravida rutrum quisque non tellus orci ac.', 2, 'matin seyyedi', '986.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `posts_slider`
--

CREATE TABLE `posts_slider` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts_slider`
--

INSERT INTO `posts_slider` (`id`, `post_id`, `active`) VALUES
(1, 3, 1),
(2, 4, 1),
(3, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `name`, `email`) VALUES
(1, 'nima', 'nima@gmail.com'),
(2, 'matin', 'matin@gmail.com'),
(3, 'zahra', 'zahra@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'ali@gmail.com', '123456'),
(2, 'liam@gmail.com', '859679'),
(3, 'sara@gmail.com', '4567889');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `posts_slider`
--
ALTER TABLE `posts_slider`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `posts_slider`
--
ALTER TABLE `posts_slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts_slider`
--
ALTER TABLE `posts_slider`
  ADD CONSTRAINT `posts_slider_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
