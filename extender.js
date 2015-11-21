/**
* This code demonstrates extending the features of our framework(app.js)
*/

(function(myContext){
	
	Type1.prototype.getAge = function(){
		return "Hello " + this.getFullName() + '!';
	}

	Type2.getSpanishGreeting = function(){
		return "Hola " + this.getFullName() + '!';
	}
}(window));