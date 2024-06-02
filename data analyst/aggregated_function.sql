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

SELECT timestamp,
   strftime('%H', timestamp)
FROM hacker_news
GROUP BY 1
LIMIT 20;

SELECT 
   strftime('%H', timestamp), AVG(score), Count(*)
FROM hacker_news
GROUP BY 1
ORDER BY 2 DESC;

SELECT 
   strftime('%H', timestamp) AS Hour, ROUND(AVG(score)) AS avg_score , COUNT(*) num_stories
FROM hacker_news
WHERE timestamp IS NOT NULL
GROUP BY 1
ORDER BY 2 DESC;


SELECT COUNT(*)
FROM newspaper;

SELECT COUNT(*)
FROM online;

SELECT COUNT(*)
FROM newspaper
JOIN online 
  ON newspaper.id = online.id;

SELECT *
FROM students
INNER JOIN classes
ON students.class_id = classes.id;

SELECT *
FROM newspaper
CROSS JOIN months;

SELECT *
FROM newspaper
CROSS JOIN months
WHERE start_month <= month 
  AND end_month >= month;


SELECT month,
  COUNT(*)
FROM newspaper
CROSS JOIN months
WHERE start_month <= months.month
  AND end_month >= months.month
GROUP BY month;

SELECT *
FROM newspaper
UNION
SELECT *
FROM online;

WITH previous_query AS (
    SELECT customer_id,
        COUNT(subscription_id) AS 'subscriptions'
    FROM orders
    GROUP BY customer_id
)
SELECT customers.customer_name,
    previous_query.subscriptions
FROM previous_query
JOIN customers
    ON previous_query.customer_id = customers.customer_id;


   --  Lyft Trip Data  mini project

   
SELECT riders.first,
   riders.last,
   cars.model
FROM riders, cars;

