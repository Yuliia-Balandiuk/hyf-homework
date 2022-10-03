INSERT INTO `task` (`title`, description, created, updated, due_date, status_id, user_id) 
VALUES ('Make call', 'Сall your best friend', '2022-08-26', '2022-08-28', '2022-08-27', 3, 5);
UPDATE `task`
SET `title` = 'Changed title'
WHERE id = 1;
UPDATE `task`
SET `due_date` = '2022-01-01'
WHERE id = 2;
UPDATE `task`
SET `status_id` = 1
WHERE id = 1;
UPDATE `task`
SET `status_id` = 3
WHERE id = 3;
DELETE FROM `task` WHERE `id` = 4;