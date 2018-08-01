var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;

  };

  someInstance.dequeue = function() {
    var result = storage[0];
    delete storage[count];
    count --;
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    
    return result;
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
