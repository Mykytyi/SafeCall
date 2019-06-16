'use strict';

function safeCall(fun) {
  try {
    fun();
    return true;
  }
  catch(error) {
    return false;
  }
}

//additional
Function.prototype.safeCall = function(...args) {
  try {
    const source = this.call(...args);
    return source;
  }
  catch(error) {
    return null;
  }
}


safeCall(() => console.log('Hello!')); // true
safeCall(() => JSON.parse('abc')); // false
safeCall(() => false); // true
safeCall(() => abc); // false
