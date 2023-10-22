/* Database queries,
Database = home_net
Table = user:
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int          | NO   | PRI | NULL    | auto_increment |
| first_name | varchar(100) | YES  |     | NULL    |                |
| user_name  | varchar(100) | YES  |     | NULL    |                |
| password   | varchar(100) | YES  |     | NULL    |                |
| link_id    | varchar(20)  | YES  |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+

+----+------------+-----------+----------+---------+
| id | first_name | user_name | password | link_id |
+----+------------+-----------+----------+---------+
|  1 | Chris      | Moktor    | mpass    | node-1  |
|  2 | Renada     | MrsMoktor | rpass    | node-2  |
|  3 | Nathanael  | Theo      | npass    | node-3  |
|  4 | Audrey     | Auddie    | apass    | node-4  |
|  5 | Abigail    | Abi       | apass    | node-5  |
+----+------------+-----------+----------+---------+

Table = tasks: 
+----------+------------+------+-----+---------+----------------+
| Field    | Type       | Null | Key | Default | Extra          |
+----------+------------+------+-----+---------+----------------+
| task_id  | int        | NO   | PRI | NULL    | auto_increment |
| id       | int        | YES  | MUL | NULL    |                |
| task     | mediumtext | YES  |     | NULL    |                |
| due      | datetime   | YES  |     | NULL    |                |
| complete | tinyint(1) | YES  |     | NULL    |                |
+----------+------------+------+-----+---------+----------------+
SHOW database
USE databasename
SHOW tables
DESCRIBE tablename



-------------------------------- CEPC DATABASE PROJECT --------------------------
+-----------------+--------------+------+-----+---------+----------------+
| Field           | Type         | Null | Key | Default | Extra          |
+-----------------+--------------+------+-----+---------+----------------+
| ID              | int          | NO   | PRI | NULL    | auto_increment |
| FirstName       | varchar(255) | YES  |     | NULL    |                |
| LastName        | varchar(255) | YES  |     | NULL    |                |
| Organization    | varchar(255) | YES  |     | NULL    |                |
| LastContact     | date         | YES  |     | NULL    |                |
| LastContactType | varchar(255) | YES  |     | NULL    |                |
| NextContact     | date         | YES  |     | NULL    |                |
| NextContactType | varchar(255) | YES  |     | NULL    |                |
+-----------------+--------------+------+-----+---------+----------------+
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| ID        | int          | NO   | PRI | NULL    | auto_increment |
| Coalition | varchar(255) | NO   |     | NULL    |                |
| IDContact | int          | YES  | MUL | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| ID        | int          | NO   | PRI | NULL    | auto_increment |
| IDContact | int          | YES  | MUL | NULL    |                |
| Email     | varchar(255) | YES  |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
+-----------+-------------+------+-----+---------+----------------+
| Field     | Type        | Null | Key | Default | Extra          |
+-----------+-------------+------+-----+---------+----------------+
| ID        | int         | NO   | PRI | NULL    | auto_increment |
| IDContact | int         | YES  | MUL | NULL    |                |
| phone     | varchar(15) | YES  |     | NULL    |                |
+-----------+-------------+------+-----+---------+----------------+

*/

/*
Check DB to see if there is a next contact date set for a meeting. 
IF false=do a reminder 4 weeks from last contact
IF true=do a reminder for the week-of the meeting




*/