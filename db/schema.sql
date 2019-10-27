create database burgers_db;

use burgers_db;
create table burgers (
    id integer(30) auto_increment,
    burger_name varchar(80),
    devoured boolean,
    primary key(id)
);
