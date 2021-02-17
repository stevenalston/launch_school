function objectHasProperty(object, property) {
  return Object.keys(object).includes(property);
}

let obj = { enabled: false };
console.log(objectHasProperty(obj, 'active'));   // returns false
console.log(objectHasProperty(obj, 'enabled'));  // returns false, should be true