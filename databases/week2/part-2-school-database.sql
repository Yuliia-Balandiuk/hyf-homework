CREATE DATABASE IF NOT EXISTS db_school;
USE db_school;
CREATE TABLE `class` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `begins_date` DATE NOT NULL,
  `ends_date` DATE NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `student` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NULL, 
  `class_id` INT (10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
--Classes
INSERT INTO `class` (`id`, `name`, `begins_date`, `ends_date`)
VALUES (1, 'HTML', '2022-05-01', '2022-05-22');
INSERT INTO `class` (`id`, `name`, `begins_date`, `ends_date`)
VALUES (2, 'CSS', '2022-05-23', '2022-06-15');
INSERT INTO `class` (`id`, `name`, `begins_date`, `ends_date`)
VALUES (3, 'JavaScript', '2022-06-15', '2022-08-10');
--Student
INSERT INTO `student` (`id`, `name`, `email`, `phone`, `class_id`)
VALUES (1, 'Yuliia', 'yuliia@gmail.com', '+4560686260',2);
INSERT INTO `student` (`id`, `name`, `email`, `phone`, `class_id`)
VALUES (2, 'Olga', 'olga@gmail.com', '+4544557733',3);
CREATE INDEX `index_name` ON `student` (`name`);
ALTER TABLE `student`
ADD `status` ENUM ('not-started', 'ongoing', 'finished') NOT NULL;