CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers 
(
    id INTEGER AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);