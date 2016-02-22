-- create database
create database if not exists news character set = "UTF8";

-- use it
use news;

-- create the stories table
create or replace table stories (
    id int not null primary key auto_increment,
    url varchar(2048) not null,
<<<<<<< HEAD
    title varchar(1024) null,        
=======
    title varchar(1024) null,       
<<<<<<< HEAD
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
=======
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
>>>>>>> 73c3867c7416c8f5a2bba02c279db1b1d04edbda
    votes int not null default 0,
    createdOn datetime not null default now()
);
