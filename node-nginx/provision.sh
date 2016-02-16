#!/usr/bin/env bash

# use noninteractive mode since this is automated
# this will suppress prompts like the root password prompt
# that normally comes up when installing MySQL
export DEBIAN_FRONTEND=noninteractive

# suppress erroneous error messages from dpkg-preconfigure
rm /etc/apt/apt.conf.d/70debconf

# update the package index 
apt-get update

# install git (needed for PM2)
apt-get install -y git

# install software-properties-common
# (gets us add-apt-repository command)
apt-get install -y software-properties-common

# install latest stable version of NGINX
add-apt-repository ppa:nginx/stable
apt-get update
apt-get install -y nginx

# install Node.js v5.x
curl -sL https://deb.nodesource.com/setup_5.x | bash -
apt-get install -y nodejs

# install build-essential for Node modules w/native code
apt-get install -y build-essential

# set the loglevel for npm to show errors only
npm config set loglevel error -g

# install the typings utility for installing
# Visual Studio Code typings files
# gives statement completion and parameter hinting
# not needed for runtime or production servers
npm install -g typings

# install PM2 to start Node servers in the background
npm install -g pm2

# rename the default NGINX configuration and replace
# it with the one in our nginx directory
# we have to copy it rather than symlink it because
# nginx reads this at system boot, but the /vagrant
# directory doesn't get mounted until after that
mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.old 
cp /vagrant/nginx/default /etc/nginx/sites-available/default
service nginx restart
