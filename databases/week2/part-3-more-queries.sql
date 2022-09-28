SELECT task.title, user.name, user.email FROM `task`
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.email REGEXP '@spotify.com';
SELECT task.id, task.title AS 'Task Name',
user.name AS 'user',
status.name AS 'status'
FROM user_task
JOIN task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id
JOIN status ON task.status_id = status.id
WHERE user.name REGEXP 'Donald Duck'
AND status.name REGEXP 'Not started';
SELECT user.name, task.title, task.created
FROM `user`
JOIN user_task ON user.id = user_task.user_id
JOIN task ON task.id = user_task.task_id
JOIN `status` ON status.id = task.status_id
WHERE user.name REGEXP 'Maryrose Meadows'
AND month(created) = 09;
SELECT COUNT(*), monthname(created)
FROM `task`
GROUP BY monthname(created);
