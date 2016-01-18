create database movies character set='UTF8';
create user moviesuser@localhost identified by 'he87650730';
grant select on movies.* to moviesuser@localhost;
