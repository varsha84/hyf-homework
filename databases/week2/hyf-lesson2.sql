/*Part 1: Working with tasks*/
use `hyf-lesson1`;
/*Add a task with these attributes: title, description, created, updated, due_date, status_id, */
INSERT INTO task(title, description, created, updated, due_date, status_id, user_id) 
VALUES ('DO database homework',NULL,'2021-08-01 19:39:16','2021-08-02 20:39:16','2021-08-06', 2 ,11);

/*Change the title of a task*/
UPDATE task
SET title = "job search"
WHERE id = 11;

/*Change a task due date*/
UPDATE task 
SET due_date ='2021-08-05' 
WHERE id = 11; 

/*Change a task status*/
UPDATE task
SET status_id = 1 
WHERE id = 11;

/*Mark a task as*/
UPDATE task
SET status_id = 3
WHERE id = 11;

/*Delete a task*/

DELETE FROM task 
WHERE id = 11;

    /*Part 3: More */
use `hyf-lesson2`;

/*Get all the tasks assigned to users whose email ends in @spotify.com*/
SELECT task.title, task.id, user.email
FROM task 
INNER JOIN user_task ON user_task.task_id = task.id 
JOIN user ON user.id = user_task.user_id 
WHERE user.email LIKE "%@spotify.com%";

/*Get all the tasks for 'Donald Duck' with status 'Not started'*/
SELECT task.title, task.id, user.name as user_name, status.name
FROM task
JOIN user_task on user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id 
JOIN status ON task.status_id =status.id
WHERE user.name LIKE "Donald Duck" AND
status.name LIKE "Not started";

/*Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/

SELECT task.title as tasks, user.name as user_name, task.created
FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
WHERE user.name LIKE "Maryrose Meadows" AND month(task.created) = 9;

/*Find how many tasks where created in each month,
-- e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/

SELECT count(task.id) as TaskCount, month(task.created) as Month
FROM task GROUP BY month(task.created);
