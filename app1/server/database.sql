CREATE TABLE students (
    roll_no SERIAL PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(100)
)


CREATE TABLE courses (
    S_no SERIAL PRIMARY KEY,
    course_name VARCHAR(100),
    student_id INTEGER NOT NULL,
    FOREIGN KEY (student_id) REFERENCES
	students(roll_no)
)


insert into students(name, city)
values 
(UPPER('akash'), UPPER('pune')), (UPPER('vikas'), UPPER('delhi')),
(UPPER('aman'), UPPER('indore'))

ALTER TABLE courses
RENAME COLUMN s_no TO course_id;

insert into courses(course_name, student_id, price)
values 
(UPPER('javascript'), 1, 999), (UPPER('python'), 1, '1299'), (UPPER('dsa'),2, 1999.12),
(UPPER('UI/UX designer'), 3, '2499.10'), (UPPER('react.js'), 3, '499.99'), (UPPER('photoshop'),2, 2999.99)

select * from courses