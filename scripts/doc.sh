#! /usr/bin/env bash

export PATH=./node_modules/.bin:$PATH

server() {
  cp History.md docs/source/release/index.md || exit $?
  cp CONTRIBUTING.md docs/source/contributing.md || exit $?
  cp CONTRIBUTING.zh-CN.md docs/source/zh-cn/contributing.md || exit $?
  hexo --cwd docs server -l
}

action=$1

if [ $action = 'server' ]; then
  server
elif [ $action = 'deploy' ]; then
  deploy
fi
