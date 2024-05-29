SELECT COUNT(*) 
FROM fake_apps
WHERE price = 0;

SELECT MIN(downloads)
FROM fake_apps;

SELECT AVG(downloads)
FROM fake_apps;

SELECT ROUND(AVG(price), 2)
FROM fake_apps;

SELECT category, SUM(downloads)
FROM fake_apps
GROUP BY category;

SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY 1, 2;

SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;

-- mini- project

SELECT *
FROM startups;

SELECT COUNT(*)
FROM startups;


SELECT AVG(valuation)
FROM startups;

SELECT MAX(raised) FROM startups; 

SELECT AVG(valuation)
FROM startups;

SELECT category, 
       ROUND(AVG(valuation), 2) AS average_valuation
FROM startups
GROUP BY category;

SELECT category, COUNT(*) 
FROM startups 
GROUP BY category;

SELECT category, COUNT(*) 
FROM startups 
GROUP BY category 
HAVING COUNT(*) > 3;

SELECT location, AVG(employees) AS size
FROM startups
GROUP BY location;

SELECT location, AVG(employees) AS size
FROM startups
GROUP BY location
HAVING AVG(employees) > 500;



-- HACKER NEWS PROJECT

SELECT  SUM(score),  user
FROM hacker_news
GROUP BY user
HAVING SUM(score) > 200;

SELECT  user, url, COUNT (url)
FROM hacker_news
WHERE url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
GROUP BY user
ORDER BY 3 DESC;


SELECT CASE
   WHEN url LIKE '%github.com%' THEN 'GitHub'
   WHEN url LIKE '%medium.com%' THEN 'Medium'
   WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
    ELSE 'Other'
  END AS 'Source'
FROM hacker_news;

SELECT CASE
   WHEN url LIKE '%github.com%' THEN 'GitHub'
   WHEN url LIKE '%medium.com%' THEN 'Medium'
   WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
    ELSE 'Other'
  END AS 'Source', COUNT(url) 
FROM hacker_news
GROUP BY 1;
