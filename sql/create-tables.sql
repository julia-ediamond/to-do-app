DROP TABLE IF EXISTS users;


CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(320) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS lists;

CREATE TABLE IF NOT EXISTS lists (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  task VARCHAR(500) NOT NULL,
  date DATE not null,
);
