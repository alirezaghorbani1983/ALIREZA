INSERT INTO `users` (`id`, `name`) VALUES (NULL, 'ali'), (NULL, 'liam'), (NULL, 'sara'), (NULL, 'nima'), (NULL, 'navid');

INSERT INTO `users` (`id`, `name`) VALUES (NULL, 'ali'), (NULL, 'liam'), (NULL, 'sara'), (NULL, 'nima'), (NULL, 'navid');

INSERT INTO users (name) VALUES ("alireza"),
								("sana"),
                                ("ali");

SELECT * FROM users WHERE id > 2;

SELECT * FROM users WHERE name LIKE '%ra';