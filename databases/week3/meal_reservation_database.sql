use meal_reservation_database;
SET
NAMES utf8mb4;

-- Creating meal table
CREATE TABLE `meal` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL,
`location` varchar(255) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` int(50),
`price` DECIMAL(5,2),
`created_date` DATETIME NOT NULL DEFAULT NOW()
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Creating reservation table
CREATE TABLE `reservation`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int(12) NULL NULL,
 `meal_id` int(10) UNSIGNED NOT NULL,
 `created_date` DATETIME NOT NULL DEFAULT NOW(),
 `contact_phonenumber` int(12) NOT NULL,
 `contact_name` varchar(255) NOT NULL,
 `contact_email` varchar(255) NOT NULL,
 constraint `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON delete cascade on update cascade
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Creating review table
CREATE TABLE `review`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` varchar(255) NOT NULL,
 `description`VARCHAR(255) NOT NULL,
 `meal_id` int(10) UNSIGNED NOT NULL,
 `stars` int(10) UNSIGNED NOT NULL,
 `created_date` DATETIME NOT NULL DEFAULT NOW(),
 constraint `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON delete cascade on update cascade

)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*insert data into meal table*/
insert into meal(`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
 values('chicken vindaloo','indian spicy chicken curry','valby','2021-08-08 04:49:05','1','120.23','2017-08-08 19:40:23'),
 ('paneer curry','indian spicy paneer curry','søborg','2021-06-08 04:49:05','12','112.13','2019-08-05 15:40:23'),
 ('palak curry','palak spicy paneer curry','virum','2015-06-08 04:49:05','10','110.28','2016-08-06 14:40:23');

/*insert data into reservation table*/
INSERT INTO reservation(`number_of_guests`,`meal_id`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES('5','1','45897890','john','john@gmail.com'),('6','1','75897890','mads','mads@gmail.com'),('7','3','35897890','Lone','Lone@gmail.com'),
('8','2','95897890','sham','sham@gmail.com');

/*insert data into review table*/
INSERT INTO review(`title`,`description`,`meal_id`,`stars`)
values('tasty','tasty spicy chicken curry','1','4'),('quantity very good','delicious spicy paneer curry','2','5'),('nice experience','delicious spicy palak curry','2','5');

/*Get all meals*/
SELECT * FROM meal;

/* add new meal*/
INSERT INTO meal(`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
 values('daal tadka', 'yellow indian daal','lyngby','2021-08-08 04:49:05','11','119.23','2020-08-08 20:40:23');

--Meal queries
 /*Get a meal with any id, fx 1*/
 SELECT * FROM meal WHERE id = 2;

 /*Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes*/
UPDATE meal
SET title = 'butter chicken', description = 'indian spicy buttter chicken masala' 
WHERE id = 5;

/*Delete a meal with any id, fx 1*/
DELETE FROM meal WHERE id = 5;

--reservation queries

/*Add a new reservation*/
INSERT INTO reservation(`number_of_guests`,`meal_id`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES('5','1','45897890','mark','mark@gmail.com'),('8','1','45897890','Kone','kone@gmail.com');
/*Get a reservation with any id, fx 1*/
SELECT * FROM reservation WHERE id=1;

/*Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes*/
UPDATE reservation
SET number_of_guests = '3', contact_phonenumber = '56789034' 
WHERE id = 3;

/*Delete a review with any id, fx 1*/

DELETE FROM reservation WHERE id = 3;

/*Get all reviews*/
SELECT * FROM review;
/*Add a new review*/
insert into review(`title`,`description`,`meal_id`,`stars`)
values('yummy','yummy spicy chicken curry','1','3');
/*Get a review with any id, fx 1*/
SELECT * FROM review WHERE id = 3;

/*Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes*/
UPDATE review
SET title = 'chicken curry', stars = '5' 
WHERE id = 3;

/*Delete a review with any id, fx 1*/
DELETE FROM review WHERE id = 1;

---Additional queries
/*Get meals that has a price smaller than a specific price fx 90*/
SELECT * FROM meal WHERE price < 112;

/*Get meals that still has available reservations*/
SELECT 
    COALESCE(SUM(reservation.number_of_guests), 0) AS total_reservation,
    meal.max_reservations,
    meal.title,
    meal.id
FROM
    meal
        LEFT JOIN
    reservation ON reservation.meal_id = meal.id
GROUP BY meal.id
HAVING max_reservations > total_reservation;

/*Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde*/
SELECT title FROM meal WHERE title LIKE "%chicken curry%";

/*Get meals that has been created between two dates*/
SELECT * FROM meal WHERE created_date BETWEEN '2010-08-08' AND '2021-03-20';

/*Get only specific number of meals fx return only 5 meals*/
SELECT * FROM meal LIMIT 5;

/*Get the meals that have good reviews*/
SELECT meal.title, review.stars FROM meal
JOIN review ON meal.id = review.meal_id 
WHERE review.stars > 4;

/*Get reservations for a specific meal sorted by created_date */
SELECT meal.title, meal.created_date, reservation.contact_name from reservation
LEFT JOIN meal ON meal.id = reservation.meal_id
WHERE meal.id = 1
ORDER BY created_date;

/*Sort all meals by average number of stars in the reviews*/
SELECT meal.title, AVG(review.stars) as Avg_stars FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY Avg_stars DESC;

