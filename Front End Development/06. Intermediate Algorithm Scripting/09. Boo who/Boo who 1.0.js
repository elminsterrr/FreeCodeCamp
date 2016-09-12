/*
Working example: https://repl.it/DOm1

Instructions: Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

'use strict';

function booWho(bool) {
  if(typeof(bool) === "boolean") {
    return true;
  }
  return false;
}

booWho(null);