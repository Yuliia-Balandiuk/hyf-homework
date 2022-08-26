SELECT task.title, user.name, user.email FROM `task`
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.email REGEXP '@spotify.com';
SELECT user.name, task.title, status.name
FROM `user`
JOIN user_task ON user.id = user_task.user_id
JOIN task ON task.id = user_task.task_id
JOIN status ON status.id = task.status_id
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
