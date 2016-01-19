drop table if exists movies;

create table movies (  
    id int (10) NOT NULL AUTO_INCREMENT,
    title varchar(128),
    released varchar(64),
    distributor varchar(64),
    genre varchar(64),
    rating varchar(64),
    gross varchar(64),
    tickets varchar(64),
    imdb_id varchar(64),
    primary key(id)
    
);
