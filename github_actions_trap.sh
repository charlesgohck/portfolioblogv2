#!/bin/bash

## catch the exit code & apply logic accordingly
function finish() {
  rv=$?
  echo "the error code received is $rv"
  if [ $rv -eq 127 ];
  then
    echo "Exit code 127: kill all node command ran"
  elif [ $rv -eq 137 ];
  then
    echo "Exit code 137: kill all node command ran"
  elif [ $rv -eq 1 ];
  then
    echo "Exit code 1: Possible pkill command ran"
  elif [ $rv -eq 0 ];
  then
    echo "Exit code 0: Exited smoothly"
  else
    echo "Non 0 & 1 & 127 exit codes"
    exit $rv
  fi
}

if [ $? -eq 0 ];
then
  echo "Killing the previous node processes"
  killall -9 node
else
  echo "No previous node processes exist"
fi
trap finish EXIT