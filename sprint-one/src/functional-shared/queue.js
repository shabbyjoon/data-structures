var Queue = function() {
	var someInstance = {
  	count : 0
  };
  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};
var storage = {};

queueMethods.enqueue = function(value){
	storage[this.count] = value;
	this.count++;

}

queueMethods.dequeue = function(){
	var result = storage[0];
	delete storage[this.count];
	this.count--;
	for( var key in storage){
		storage[key-1] = storage[key];		
	}
	return result;

}

queueMethods.size = function(){
	if( this.count < 0 ){
		return 0;
	} else {
		return this.count;
	}
}


