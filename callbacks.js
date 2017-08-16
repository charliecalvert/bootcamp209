function sayHello(sayGoodbye) {
	console.log('hello');	
	sayGoodbye();
}

// var sayGoodbye = 

sayHello(function() {
	console.log('goodbye');	
});

// sayGoodbye();

