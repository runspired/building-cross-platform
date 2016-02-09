/*

Terminology

- list
- hash
- pojo ("plain old javascript object")
- EmptyObject/NullObject
- dictionary

All of the above words describe roughly the same concept. Often you need to store key/value
pairs, where the value can be anything and the key is a string or number.  A simple example
of this would be a list of users stored by username or user id.

An EmptyObject or NullObject is a concept we will see later (in the spring semester), but
it's basically just a POJO that inherits from "Null" so that it won't have any undesireable
keys already present on it.

Sometimes, you need a more advanced hash than simple key/value pairs can achieve. Being limited
to keys that are just strings of numbers is very limiting.  Let's say, for instance, that you
have an instance of `User` and an array of `Car`s that belong to that user.  You *might* be
tempted to add the property `cars` to User pointing to the array of cars.  This sort of "linking"
though only fits situations in which it's both easy and desireable to add a new property to one
or both objects to link them together.

Sometimes, you just need a list of links between objects.  For instance, imagine you have an
array of users, and want to know the last time each user's data was updated with fresh data
 from your server.  In this case, the "user" would be the key, and the value would be a timestamp.

A list of key/value pairs where the key can be any arbitrary object is called a "Map"
ES6 contains two ways of doing this that are incredibly easy, but unfortunately for this
exercise we won't use them.  Instead, we're going to create our own "Map" implementation.

## Official Map and WeakMap implementations, in case you are curious

- ES6 Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- ES6 WeekMap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

## Not needed, but could be used

- ES6: defineProperty https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
- ES6 Symbol: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

### Exercise

Export the function `Map` which will be used when creating a new map
and utilized in the following way.

```
const a = {};
const b = {};

const map = new Map();
Map.set(a, b);
Map.get(a); // returns b

Map.delete(a);
Map.get(a); // returns Undefined

Map.set(a, b);
Map.set(b, a);
Map.clear(); // removes all entries
Map.get(a); // returns Undefined
Map.get(b); // returns Undefined

const context = { hello: 'world' };
Map.forEach(function(value, key) { console.log(this, value, key); }, context);
```

You will need to implement the methods `set` and `get`, `forEach`, `delete` and `clear`.

You can create this "linking" behavior by utilizing two arrays, one for keys, one for values
where the key and the value will share an identical index.

For insertion, you will need to use

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

For delete, you will need to use

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

Calling `set` with an existing key should overwrite the value for that key.


N.B.:

 A strict `===` between two references will tell you whether they are the same,
 similarly, given the objects referenced by the variables `one`, `two` and `three`,
 if you have an array containing these objects `[one, two, three]`, it is possible
 to do an easy check to see if the object is within the array using `indexOf`.

*/
