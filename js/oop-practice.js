// STEP 1:Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.
    // function Cat() {
    //     constructor() {

    //     }
    // };

    // const Dog = function(){
    //     constructor(){

    //     }
    // };


// STEP 2:Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
    // const cat1 = new Cat();
    // const dog1 = new Dog();

// STEP 3:Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window. 

    // class Animal{
    //     constructor() {
    //         console.log(`The Animal has been created.`);
    //     }
    // }

// STEP 4: Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.
    // class Animal {
    //     constructor(type) {
    //         console.log(`The ${type} Animal has been created.`);
    //     }
    // }
    // const newAni = new Animal('leopard');



// STEP 5:Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 
        // class Animal {
        //     constructor(type, breed, color, height, length) {
        //             this._type   = type;
        //             this._breed  = breed;
        //             this._color  = color;
        //             this._height = height;
        //             this._length = length;
        //         console.log(`The ${type} Animal has been created. Color is ${color}, Breed is${breed}, Height and length are ${height} and ${length}.`);
        //     }
        // }
        // const newAni = new Animal('big cat','leopard','spotted', 40, 50);

// STEP 6:Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

    //  class Animal {
    //         constructor(type, breed, color, height, length) {
    //                 this._type   = type;
    //                 this._breed  = breed;
    //                 this._color  = color;
    //                 this._height = height;
    //                 this._length = length;
    //         }
                 
    //  }
    //     const newAni1 = new Animal('elephant','African','gray', 100, 250);
       

        // for (x in newAni1) {
        //                 console.log(`${x}: ${newAni1[x]}`);
        // }

// STEP 7:Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
// const dog1 = new Animal('dog', 'Dachshund', 'brown', 7, 18);
// const cat1 = new Animal('cat', 'Siamese', 'gray', 11, 12);

//  Animal.prototype.speak = function() {
//      if(this._type === 'cat') {
//         return (`The ${this._color} cat is meowing!`);
//      } else if (this._type === 'dog') {
//         return (`The ${this._color} dog is barking!`);
//  }
// }

// console.log(dog1.speak());
// console.log(cat1.speak());



// STEP 8:Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
// function Animal (type, breed, color, height, length) {
//             this._type   = type;
//             this._breed  = breed;
//             this._color  = color;
//             this._height = height;
//             this._length = length;
//             this.checkType = function () {
//                 if(this._type === 'cat') {
//                 return(`cat`);
//                 }
//                 else if(this._type === 'dog') {
//                 return(`dog`);
//                 }
//             }
//             speak = function() {
//                 return console.log(`The ${this.checkType()} has made a noise!`);
//             }
//         }
//         const dog1 = new Animal('dog', 'Dachshund', 'brown', 7, 18);
//         const cat1 = new Animal('cat', 'Siamese', 'gray', 11, 12);

// dog1.speak();
// cat1.speak();

// STEP 9:Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype

String.prototype.findWords = function() {
    let sample = 'It was a few weeks before my own marriage, during the days when I was still sharing rooms with Holmes in Baker Street, that he came home from an afternoon stroll to find a letter on the table waiting for him. I had remained indoors all day, for the weather had taken a sudden turn to rain, with high autumnal winds, and the Jezail bullet which I had brought back in one of my limbs as a relic of my Afghan campaign throbbed with dull persistence. With my body in one easy-chair and my legs upon another, I had surrounded myself with a cloud of newspapers until at last, saturated with the news of the day, I tossed them all aside and lay listless, watching the huge crest and monogram upon the envelope upon the table and wondering lazily who my friend\'s noble correspondent could be.'
     return indexOf('in');

   
    console.log(findWords());
}

