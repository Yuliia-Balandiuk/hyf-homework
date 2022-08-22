SELECT COUNT(id) 
FROM `task`;
SELECT COUNT(id) 
FROM `task` 
WHERE `due_date` is NULL;
SELECT task.title, task.description, status.name
FROM `task`
JOIN `status` ON task.status_id = status.id
WHERE `name` REGEXP 'done';
SELECT task.title, task.description, status.name
FROM `task`
JOIN `status` ON task.status_id = status.id
WHERE `name` NOT REGEXP 'done';
SELECT *
FROM `task`
ORDER BY `created` DESC;
SELECT `id`,`title`,`created`
FROM `task`
ORDER BY `created` DESC LIMIT 1;
SELECT `id`, `title`, `due_date`
FROM `task`
WHERE `title` REGEXP 'database' OR 
      `description` REGEXP 'database';
SELECT `id`,`title`, status.name AS text
FROM `task`
JOIN status ON task.status_id = status.id;
SELECT status.name AS text, COUNT(*) as `amount`
FROM `task`
JOIN status ON task.status_id = status.id
GROUP BY status.name;
SELECT status.name AS text, COUNT(*) as `amount`
FROM `task`
JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY `amount` DESC;
