"use strict";

const array = () => {
  const arr = [];
  const element = (i) => arr[i];
  element.push = (x) => arr.push(x);
  element.pop = () => arr.pop();
  return element;
};

module.exports = { array };
