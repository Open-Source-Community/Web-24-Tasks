// click on like button will change the icon and the "Like" word into blue.
const LB = document.getElementById("likeButton");

LB.addEventListener("click", function () {
  const icon = likeButton.querySelector("i");
  const text = likeButton.querySelector("h4");

  icon.style.color = "blue";
  text.style.color = "blue";
});

// click on share will open a new page.
const SB = document.getElementById("shareButton");

SB.addEventListener("click", function () {
  window.open("https://www.google.com/", "_blank");
});

//click on the comment button will open a prompt pop-up.

const C = document.getElementById("commentButton");

C.addEventListener("click", function () {
  window.prompt("Enter your comment:");
});

//typing anything on the top input bar will change the "message here" of all posts into the new message.

//if the user input of the top bar contains at least one number add image element to any post containing a photo of google.com.
const textInput = document.getElementById("textInput");
const messageHere = document.getElementById("messageHere");
const messageParagraphs = document.querySelectorAll("#messageHere p");

textInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission

    const inputValue = textInput.value;

    // Check if the input value contains at least one number
    if (/\d/.test(inputValue)) {
      const image = document.createElement("img");
      image.src =
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d2abd662597191.5a9589b09ddf5.jpg";
      image.width = 200;
      image.height = 200;
      messageHere.appendChild(image);
    } else {
      messageParagraphs.forEach(function (paragraph) {
        paragraph.textContent = inputValue;
      });
    }
    textInput.value = ""; // Clear the input field
  }
});

//if the user input of the top bar contains at least one number add image element to any post containing a photo of google.com.
class Car {
  constructor(model, make, velocity) {
    this.model = model;
    this.make = make;
    this.velocity = velocity;
  }

  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }
}

// Create three Car objects
const car1 = new Car("BMW", "B", 100);
const car2 = new Car("Jeep", "J", 200);
const car3 = new Car("Ferary", "F", 300);

// print values in console
console.log("Car 1 Add Numbers :", car1.add(5, 10));
console.log("Car 2 Model :", car2.model);
console.log("Car 3 Velocity:", car3.velocity);

//make a JSON variable named person with (name, age, city) as a string and convert it into object then display it's data in all elements "h2" in class "post__info".

const p = '{"name": "Omnia Ahmed", "age": 21, "city": "Nasr city"}';

// Convert the JSON string to a JavaScript object
const person = JSON.parse(p);

// Get all <h2> elements in the post__info class
const h2Elements = document.querySelectorAll(".post__info h2");

// Update the content of the <h2> elements with the person's name
h2Elements.forEach((h2) => {
  h2.textContent = person.name + "\t" + person.age + "\t" + person.city;
});
