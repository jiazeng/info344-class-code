drop table if exists moviess;

create table moviess (  
    title varchar(128),
    released date,
    distributor varchar(64),
    genre varchar(64),
    rating varchar(64),
    gross int,
    tickets int,
    imdb_id varchar(64),
    primary_key varchar (10) not null primary key,
);
