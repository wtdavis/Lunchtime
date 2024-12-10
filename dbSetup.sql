DROP DATABASE lunchtime;
CREATE DATABASE lunchtime;
USE lunchtime;
DROP TABLE students;
CREATE TABLE students (
    id primary key,
    studentFirstName varchar(255),
    studentLastName varchar(255),
    studentSocialist boolean
);
INSERT INTO students (
    studentFirstName, studentLastName, studentSocialist
) VALUES (
    ('john', 'jacob', 0),
    ('sarah', 'jenkins', 1),
    ('steven', 'evens', 1),
    ('evelynda', 'evangelista', 0)
);