DROP DATABASE IF EXISTS dropApp;

CREATE DATABASE dropApp;

USE dropApp;

-- CREATE TABLE IF NOT EXISTS users (
--   user_id INT AUTO_INCREMENT,
--   user_name VARCHAR(15),
--   PRIMARY KEY(user_id)
-- );

CREATE TABLE IF NOT EXISTS reviews (
  review_id INT AUTO_INCREMENT,
  user_name TEXT,
  product_id INT NOT NULL,
  review_date DATE,
  header VARCHAR(50),
  review_text TEXT,
  rating INT,
  would_recommend BOOLEAN,
  PRIMARY KEY(review_id)
  -- FOREIGN KEY(user_id) REFERENCES users(user_id)
);
