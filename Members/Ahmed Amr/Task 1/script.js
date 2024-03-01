/*------------------- Class Part -------------------*/

class car {
  constructor(model, make, velocity) {
    this.model = model;
    this.make = make;
    this.velocity = velocity;
  }
  add(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
      return `${num1} + ${num2} = ${num1 + num2}`;
    } else {
      return "Invalid Input";
    }
  }
  subtract(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
      return `${num1} - ${num2} = ${num1 - num2}`;
    } else {
      return "Invalid Input";
    }
  }
  display() {
    console.log(
      `This car is a ${this.make} ${this.model}, with velocity of ${this.velocity}`
    );
  }
}

car1 = new car("M3", "BMW", 180);
car1.display();
car2 = new car("Elantra ", "Hyundai", 120);
car2.display();
car3 = new car("DB11 ", "Aston Martin", 200);
car3.display();

/*----------------------- JSON Part -----------------------*/

let person = '{"name":"Ahmed Elhossieny", "age":"26", "city":"Cairo"}';
const personObj = JSON.parse(person);

/*----------------------- DOM Part -----------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const inputOptions = document.querySelectorAll(".inputOption");
  inputOptions.forEach((inputOption) => {
    inputOption.addEventListener("click", () => {
      if (inputOption.querySelector("h4").innerHTML === "Like") {
        if (
          inputOption.querySelector("i").style.color == "blue" ||
          inputOption.querySelector("h4").style.color == "blue"
        ) {
          inputOption.querySelector("i").style.color = "gray";
          inputOption.querySelector("h4").style.color = "gray";
        } else {
          inputOption.querySelector("i").style.color = "blue";
          inputOption.querySelector("h4").style.color = "blue";
        }
      }
      if (inputOption.querySelector("h4").innerHTML === "Comment") {
        window.prompt("Comment", "Write down a comment..");
      }
      if (inputOption.querySelector("h4").innerHTML === "Share") {
        window.open("index.html");
      }
    });
  });
  postUsers = document.querySelectorAll(".post__info h2");
  postUsers.forEach((postUser) => {
    postUser.textContent = `${personObj.name}, ${personObj.age}, ${personObj.city}`;
  });
});

function changePosts() {
  postImageBool = false;
  const postInput = document.querySelector("form input");
  const postText = postInput.value;
  for (i = 0; i < postText.length; i++) {
    if (!isNaN(postText[i])) {
      postImageBool = true;
    }
  }
  if (postInput) {
    postInput.value = "";
    let posts = document.querySelectorAll(".post__body");
    posts.forEach((post) => {
      post.querySelector("p").textContent = postText;
      if (postImageBool) {
        if (!post.querySelector("img")) {
          imgChild = document.createElement("img");
          imgChild.setAttribute(
            "src",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          );
          imgChild.setAttribute("width", "400");
          post.appendChild(imgChild);
        }
      } else if (post.querySelector("img")) {
        post.querySelector("img").remove();
      }
    });
  }
  return false;
}