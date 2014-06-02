// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Igor Gaelzer
//  2. Jennie Chamberlin


// 0. "YOU SIGNED... WHO?!"

function client(name, age, quote) {
    this.name= name;
    this.age= age;
    this.quote = quote;
    
};
   
var idina = new client("Idina Menzel", 43, "Let it go");


// 1. "Here they Come!"

var adam = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!",
};
    
var kristen = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?",
};

var jim = {
  name: "Jim Carrey",
  age: 52,
  quote:  "...So you're telling me there's a chance? YEAH!",
};



// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

shooterMcGavin.constructor === client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";



// 3. "SHOW 'EM OFF!"

var printClients = function(client) {
  var name = client.name;
  var age = client.age;
  var quote = client.quote;
  
  console.log("*** " + name.toUpperCase() + "'S DATA ***");
  console.log("Name: " + name);
  console.log("Age: " + age);
  console.log("Favorite quote: \"" + quote + "\"");
  console.log("\n");
};

console.log("\n");
printClients(shooterMcGavin);
printClients(adam);
printClients(kristen);
printClients(jim);



// 4. "But wait, there's more!"

function Client(whattheycallme, age, quote) {
    this.name= whattheycallme;
    this.age= age;
    this.quote = quote;
    this.showQuote = function() {
      console.log(this.quote);
    }
}

shooterMcGavin.showQuote()

// 5.  ** BONUS **

// To add other client details, simply define properties for those clients:

shooterMcGavin.favoriteCake = "chocolate"


//  6.  Your Reflection:
/*

What parts of your strategy worked? What problems did you face?
I did not feel prepared at all for this GPS. I had to solve things I had no idea how to. I wish I had more time, like a day or 2 of practice so I wouldn't feel so lost.

What questions did you have while coding? What resources did you find to help you answer them?
I did not know where to start.

What concepts are you having trouble with, or did you just figure something out? If so, what?
Once having a first explanation, no troubles.

Did you learn any new skills or tricks?
I learned the basics of Javascript.

How confident are you with each of the Learning Competencies?
80%

Which parts of the challenge did you enjoy?
I enjoyed working in pairs.

Which parts of the challenge did you find tedious?
Not knowing anything beforehand and having to complete something without having basic knowledge.

*/


