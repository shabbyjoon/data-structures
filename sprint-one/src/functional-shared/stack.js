
var Stack = function() {
  var someInstance = {
  	count : 0
  };
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};
var storage = {};

stackMethods.push = function(value){
	storage[this.count] = value;
	this.count++;

}

stackMethods.pop = function(){
	this.count--;
	var result = storage[this.count];
	delete storage[this.count];
	return result;

}

stackMethods.size = function(){
	if(this.count < 0){
		return 0;
	} else {
	  return this.count;
	}
}

