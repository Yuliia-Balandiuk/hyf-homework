CREATE DATABASE IF NOT EXISTS mealsharing_db;
USE mealsharing_db;
CREATE TABLE `meal` (
  `id` INT(100) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` INT(20) NOT NULL,
  `price` DECIMAL (5,2) NOT NULL,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `reservation` (
`id` INT(100) UNSIGNED NOT NULL AUTO_INCREMENT,
`number_of_guests` INT(50) NULL,
`meal_id` INT(100) UNSIGNED NOT NULL,
`created_date` DATE NOT NULL,
`contact_phonenumber` VARCHAR(50) NOT NULL,
`contact_name` VARCHAR(255) NOT NULL,
`contact_email` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`),
CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `review` (
`id` INT(100) UNSIGNED NOT NULL AUTO_INCREMENT,
`title` VARCHAR(255) NOT NULL,
`description` TEXT NOT NULL,
`meal_id` INT(100) UNSIGNED NOT NULL,
`stars` INT(5) NULL,
`created_date` DATE NOT NULL,
PRIMARY KEY (`id`),
CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);