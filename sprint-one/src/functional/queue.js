var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var key;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    count++;

  };

  someInstance.dequeue = function() {
    count--;
    delete storage[key-1]

  };

  someInstance.size = function() {
    if( count < 0) {
      return 0;
    } else {
      return count;
    }
  };

  return someInstance;
};
