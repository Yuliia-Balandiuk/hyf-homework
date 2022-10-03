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
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date)
VALUES (1, 'Crawfish soup', 'Traditional soup cooked on crawfish tails. Served with homemade dumplings with crayfish necks', 'Bregnegaardsvej 2A, 2920 Charlottenlund', '2022-08-01 10:00:00', 2, 250.50, '2022-08-01');
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date)
VALUES (2, 'Fish soup', 'Our twist on a Hungarian soup Halaszle. Servered with spicy Eros Pista saus', 'Gl. Hovedvagt, Kastellet 1, 2100 Kobenhavn', '2022-08-05 08:00:00', 4, 100, '2022-08-04');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (1, 2, 3, '2022-08-11', '+4560443322', 'Chris', 'chris@gmail.com');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 1, 1, '2022-08-01', '+4560883399', 'Susanne', 'susanne@gmail.com');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 4, 2, '2022-08-05', '+4560664411', 'Morten', 'morten@gmail.com');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 4, 3, '2022-08-11', '+4560443300', 'Olga', 'olga@gmail.com');
INSERT INTO review (id, title, description, meal_id, stars, created_date) 
VALUES (1, 'Very good', 'Nicely designed place with fancy way of serving dishes. Highly recommended for visitors during weekdays as not so crowded.', 3, 5, '2022-08-14');
INSERT INTO review (id, title, description, meal_id, stars, created_date) 
VALUES (2, 'Good', 'Good price for what they offer.', 1, 4, '2022-08-10');