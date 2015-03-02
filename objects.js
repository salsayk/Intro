var email = {
  bob: 'bob@gmail.com',
  jane: 'jane@walla.co.il',
  bill: 'crazypen@yahoo.com'
};

// get all keys from an object
// keys is: ['bob', 'jane', 'bill']
var keys = _.keys(email);

// bob_and_jane is now a new object with only:
// { bob: 'bob@gmail.com', 
//   jane: 'jane@walla.co.il' }
var bob_and_jane = _.pick(email, 'bob', 'jane');

// true - object has key bob
_.has(email, 'bob');

// false - object doesn't have key foo
_.has(email, 'foo');