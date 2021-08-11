/*Find out how many tasks are in the task table*/
SELECT COUNT(id) as tasks FROM task;

/*Find out how many tasks in the task table do not have a valid due date*/

SELECT COUNT(id) as tasks FROM task WHERE due_date = NULL;

/*Find all the tasks that are marked as done*/

SELECT * from task INNER JOIN status ON status.id = task.status_id WHERE status.name = "Done";

/*Find all the tasks that are not marked as done*/

SELECT * FROM task INNER JOIN status on status.id = task.status_id WHERE status.name != "Done";

/*Get all the tasks, sorted with the most recently created first*/
SELECT * FROM task ORDER BY created DESC;

/*Get the single most recently created task*/
SELECT * FROM task ORDER BY created DESC LIMIT 1;

/* Get the title and due date of all tasks where the title or description contains database */
SELECT task.title, task.due_date FROM task WHERE title LIKE "%database%" OR description LIKE "%database%";

/*Get the title and status (as text) of all tasks*/

SELECT  task.title, status.name as status FROM task INNER JOIN status on status.id = task.status_id;

/*Get the name of each status, along with a count of how many tasks have that status*/
SELECT status.name,  FROM task INNER JOIN status ON  status.id = task.status_id GROUP BY task.status_id;

/*Get the names of all statuses, sorted by the status with most tasks first*/
SELECT status.name, COUNT(task.id) FROM task INNER JOIN status ON status.id = task.status_id 
GROUP BY task.status_id
ORDER BY COUNT(task.status_id) DESC;
