-- file path must be a full path to your CSV file
load data infile '~/Desktop/INFO344/info344-class-code/hw1-lamp-server/data/movies-2014.csv'
into table movies
fields terminated by ','
optionally enclosed by '"'
ignore 1 lines

(title,
released, 
distributor, 
genre, 
rating, 
gross, 
tickets, 
imdb_id);
