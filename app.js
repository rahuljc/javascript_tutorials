// This is a practice code after Anthony Alicea's Javscript course.

/**
* Using function constructor method.
*
*/
(function(context){

	var Human = function(firstName,lastName,age){
		return new Person(firstName,lastName,age);
	}

	var Person = function(firstName,lastName,age){
		this.firstName	= firstName || '';
		this.lastName	= lastName || '';
		this.age 		= age || 0;
	}

	Person.prototype = {
		getFullName: function(){
			return this.firstName + ' ' + this.lastName;
		},
		getAge:  function(){
	 		return this.age;
		}
	}

	T1 = Human;
	context.Type1 = Person;
}(window));


/**
* Using object literal method.
*
*/
(function(context){

	var Human = function(firstName,lastName,age){
		return Person.init(firstName,lastName,age);
	}

	var Person = {
		firstName: '',
		lastName: '',
		age:0,
		getFullName: function(){
			return this.firstName + ' ' + this.lastName;
		},
		init: function(firstName,lastName,age){
			this.firstName	= firstName;
			this.lastName 	= lastName;
			this.age 		= age;
			return this;
		}
	};

	T2 = Human; // assigning a shortcut name
	context.Type2 = Person; // to allow global access
}(window));