/*Part 2: School database*/
use `school-db`;
SET NAMES utf8mb4;
/*Class: with the columns: id, name, begins (date), ends (date)*/
CREATE TABLE `class`
(
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `begins_date` DATETIME NOT NULL,
    `ends_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Student: with the columns: id, name, email, phone, class_id (foreign key)*/
CREATE TABLE `student`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Create an index on the name column of the student table.*/
CREATE UNIQUE INDEX student_name ON `student` (name);

/*Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).*/

ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;