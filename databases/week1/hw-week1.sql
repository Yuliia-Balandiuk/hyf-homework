-- 1 Find out how many tasks are in the task table
SELECT COUNT(id) 
FROM `task`;

-- 2 Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id) 
FROM `task` 
WHERE `due_date` is NULL;

-- 3 Find all the tasks that are marked as done
SELECT task.title, task.description, status.name
FROM `task`
JOIN `status` ON task.status_id = status.id
WHERE `name` REGEXP 'done';

-- 4 Find all the tasks that are not marked as done
SELECT task.title, task.description, status.name
FROM `task`
JOIN `status` ON task.status_id = status.id
WHERE `name` NOT REGEXP 'done';

-- 5 Get all the tasks, sorted with the most recently created first
SELECT *
FROM `task`
ORDER BY `created` DESC;

-- 6 Get the single most recently created task
SELECT MAX(created) 
FROM `task`;

-- 7 Get the title and due date of all tasks where the title or description contains database
SELECT `title`, `due_date`
FROM `task`
WHERE `title` REGEXP 'database' OR 
      `description` REGEXP 'database';

-- 8 Get the title and status (as text) of all tasks
SELECT `title`, status.name AS text
FROM `task`
JOIN status ON task.status_id = status.id;

-- 9 Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS text, COUNT(*) as `amount`
FROM `task`
JOIN status ON task.status_id = status.id
GROUP BY status.name;

-- 10 Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS text, COUNT(*) as `amount`
FROM `task`
JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY `amount` DESC;
