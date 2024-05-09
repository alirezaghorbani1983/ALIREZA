-- SELECT * FROM celebs;

-- create table

CREATE TABLE celebs (
   id INTEGER, 
   name TEXT, 
   age INTEGER
); 

INSERT INTO celebs (id, name, age) 
VALUES (1, 'Justin Bieber', 29); 

INSERT INTO celebs (id, name, age) 
VALUES (2, 'Beyonce Knowles', 42); 

INSERT INTO celebs (id, name, age) 
VALUES (3, 'Jeremy Lin', 35); 

INSERT INTO celebs (id, name, age) 
VALUES (4, 'Taylor Swift', 33); 

-- SELECT name FROM celebs; 
SELECT * FROM celebs;

DELETE FROM celebs 
WHERE twitter_handle IS NULL;

SELECT * FROM celebs; 

CREATE TABLE awards (
   id INTEGER PRIMARY KEY,
   recipient TEXT NOT NULL,
   award_name TEXT DEFAULT 'Grammy'
);
