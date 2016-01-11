create database zips character set='UTF8';
create user zipsuser@localhost identified by 'he87650730';
grant select on zips.* to zipsuser@localhost;
