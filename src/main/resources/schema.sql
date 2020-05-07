DROP TABLE IF EXISTS new_abba_church_users;

CREATE TABLE new_abba_church_users (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  user_name VARCHAR(250) NOT NULL,
  pass_word VARCHAR(250) NOT NULL,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  phone_number VARCHAR(15)
);