-- SELECT * FROM celebs;

-- create table

-- CREATE TABLE celebs (
--    id INTEGER, 
--    name TEXT, 
--    age INTEGER
-- ); 

-- INSERT INTO celebs (id, name, age) 
-- VALUES (1, 'Justin Bieber', 29); 

-- INSERT INTO celebs (id, name, age) 
-- VALUES (2, 'Beyonce Knowles', 42); 

-- INSERT INTO celebs (id, name, age) 
-- VALUES (3, 'Jeremy Lin', 35); 

-- INSERT INTO celebs (id, name, age) 
-- VALUES (4, 'Taylor Swift', 33); 

-- -- SELECT name FROM celebs; 
-- SELECT * FROM celebs;

-- DELETE FROM celebs 
-- WHERE twitter_handle IS NULL;

-- SELECT * FROM celebs; 

-- CREATE TABLE awards (
--    id INTEGER PRIMARY KEY,
--    recipient TEXT NOT NULL,
--    award_name TEXT DEFAULT 'Grammy'
-- );

//MINI PROJECT

CREATE TABLE friends (
    id INTEGER,
    name TEXT,
    birthday DATE
);

INSERT INTO friends (name, birthday) VALUES ('Ororo Munroe', '1940-05-30');

SELECT * FROM friends;

INSERT INTO friends (id, name, birthday) VALUES (1, 'John Doe', '1990-04-15');

INSERT INTO friends (id, name, birthday) VALUES (2, 'Jane Smith', '1985-10-20');

UPDATE friends
SET name = 'Storm'
WHERE name = 'Ororo Munroe';

ALTER friends
ADD COLUMN email TEXT;

DELETE FROM friends 
WHERE id = 1;

SELECT * FROM friends;

SELECT *
FROM movies
WHERE year BETWEEN 1970 AND 1979;