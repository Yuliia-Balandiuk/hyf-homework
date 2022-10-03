SELECT *
FROM meal;
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date)
VALUES (3, 'Rack of lamb', 'Served withpotato dumplings, homemade ajika and yogurt saus', 'Danneskiold-Samsoes Alle 41, 1434 Kkbenhavn', '2022-08-11 16:30:00', 4, 100, '2022-08-11');
SELECT *
FROM meal
WHERE id = 1;
UPDATE meal
SET price = 340, max_reservations = 3
WHERE id = 3;
DELETE
FROM meal
WHERE id = 3;
SELECT *
FROM reservation;
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 1, 3, '2022-08-11', '+4560443355', 'YUliia', 'yuliia@gmail.com');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (6, 2, 3, '2022-08-15', '+4560443355', 'YUliia', 'yuliia@gmail.com');
SELECT *
FROM reservation
WHERE id = 1;
UPDATE reservation
SET contact_name = 'Nikolaj', number_of_guests = 5
WHERE id = 5;
DELETE
FROM reservation
WHERE id = 3;
SELECT *
FROM review;
INSERT INTO review (id, title, description, meal_id, stars, created_date) 
VALUES (3, 'Good', 'Amazing food.', 3, 5, '2022-08-21');
INSERT INTO review (id, title, description, meal_id, stars, created_date) 
VALUES (4, 'Not tasty', 'Not fresh food.', 2, 2, '2022-08-25');
INSERT INTO review (id, title, description, meal_id, stars, created_date) 
VALUES (5, 'Good', 'Amazing food.', 1, 5, '2022-08-29');
SELECT *
FROM review
WHERE id = 2;
UPDATE review
SET title = 'Nise', description = 'Not the best food', stars = 3
WHERE id = 3;
SELECT *
FROM meal
WHERE price < 300;
SELECT * 
FROM meal
WHERE title REGEXP 'soup';
SELECT * 
FROM meal
WHERE created_date
BETWEEN '2022-08-02' AND '2022-08-25';
SELECT *
FROM meal
LIMIT 2;
SELECT *
FROM meal
JOIN review ON review.meal_id = meal.id
WHERE stars >= 4;
SELECT *
FROM meal
INNER JOIN reservation ON reservation.meal_id = meal.id
WHERE meal.title = 'Rack of lamb'
ORDER BY reservation.created_date;
SELECT  meal.id, meal.title, AVG(review.stars)
FROM meal
INNER JOIN review ON meal.id = review.meal_id
GROUP BY meal_id
ORDER BY AVG(review.stars) DESC;