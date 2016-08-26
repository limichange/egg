#! /usr/bin/env bash

export PATH=./node_modules/.bin:$PATH

server() {
  hexo --cwd docs server -l
}

action=$1

if [ $action = 'server' ]; then
  server
elif [ $action = 'deploy' ]; then
  deploy
fi
