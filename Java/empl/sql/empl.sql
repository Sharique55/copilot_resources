CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    last_name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    hire_date DATE NOT NULL,
    position VARCHAR(50) NOT NULL
)

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    task_name VARCHAR(50) NOT NULL,
    task_status VARCHAR(50) NOT NULL,
    employee_id INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
)

insert into employees (last_name, first_name, hire_date, position) values ('Smith', 'John', '2018-01-01', 'Manager');
insert into employees (last_name, first_name, hire_date, position) values ('Doe', 'Jane', '2019-01-01', 'Developer');
insert into employees (last_name, first_name, hire_date, position) values ('Johnson', 'Alice', '2020-01-01', 'Developer');
insert into employees (last_name, first_name, hire_date, position) values ('Brown', 'Bob', '2021-01-01', 'Developer');

insert into tasks (task_name, task_status, employee_id) values ('Task 1', 'In Progress', 1);
insert into tasks (task_name, task_status, employee_id) values ('Task 2', 'In Progress', 2);
insert into tasks (task_name, task_status, employee_id) values ('Task 3', 'In Progress', 3);

CREATE DATABASE cool_app;
