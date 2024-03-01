numberOfPosts = 10;
for (var i = 0; i < numberOfPosts; i++) {
  let post = document.createElement("div");
  post.classList.add("post");
  post.setAttribute("id", `p${i + 1}`);

  let postHeader = document.createElement("div");
  postHeader.classList.add("post__header");

  let ii = document.createElement("i"),
    iiText = document.createTextNode(" account_circle ");
  ii.classList.add("material-icons", "sidebar__topAvatar");
  ii.appendChild(iiText);
  postHeader.appendChild(ii);

  let postInfo = document.createElement("div");
  postInfo.classList.add("post__info");

  let head2 = document.createElement("h2"),
    head2Text = document.createTextNode("Somanath Goudar"),
    paragraph = document.createElement("p"),
    paragraphText = document.createTextNode("Job Description");

  head2.appendChild(head2Text);
  paragraph.appendChild(paragraphText);
  postInfo.appendChild(head2);
  postInfo.appendChild(paragraph);
  postHeader.appendChild(postInfo);
  post.appendChild(postHeader);

  let postBody = document.createElement("div"),
    paragraph2 = document.createElement("span"),
    paragraph2Text = document.createTextNode("Message here");
  paragraph2.classList.add("p");
  paragraph2.appendChild(paragraph2Text);
  postBody.appendChild(paragraph2);
  post.appendChild(postBody);

  let feedInputOptions = document.createElement("div");
  feedInputOptions.classList.add("feed__inputOptions");

  let inputOption1 = document.createElement("div");
  inputOption1.classList.add("inputOption", "likeBtn");
  let i1 = document.createElement("i");
  i1.classList.add("material-icons", "icolor");
  let i1Text = document.createTextNode(" thumb_up ");
  i1.appendChild(i1Text);
  let h1 = document.createElement("h4"),
    h1Text = document.createTextNode("Like");
  h1.appendChild(h1Text);
  inputOption1.appendChild(i1);
  inputOption1.appendChild(h1);
  feedInputOptions.appendChild(inputOption1);

  let inputOption2 = document.createElement("div");
  inputOption2.classList.add("inputOption", "commentBtn");
  let i2 = document.createElement("i");
  i2.classList.add("material-icons", "icolor");
  let i2Text = document.createTextNode(" comment ");
  i2.appendChild(i2Text);
  let h2 = document.createElement("h4"),
    h2Text = document.createTextNode("comment");
  h2.appendChild(h2Text);
  inputOption2.appendChild(i2);
  inputOption2.appendChild(h2);
  feedInputOptions.appendChild(inputOption2);

  let inputOption3 = document.createElement("div");
  inputOption3.classList.add("inputOption", "shareBtn");
  let i3 = document.createElement("i");
  i3.classList.add("material-icons", "icolor");
  let i3Text = document.createTextNode(" share ");
  i3.appendChild(i3Text);
  let h3 = document.createElement("h4"),
    h3Text = document.createTextNode("share");
  h3.appendChild(h3Text);
  inputOption3.appendChild(i3);
  inputOption3.appendChild(h3);
  feedInputOptions.appendChild(inputOption3);

  let inputOption4 = document.createElement("div");
  inputOption4.classList.add("inputOption");
  let i4 = document.createElement("i");
  i4.classList.add("material-icons", "icolor");
  let i4Text = document.createTextNode(" send ");
  i4.appendChild(i4Text);
  let h4 = document.createElement("h4"),
    h4Text = document.createTextNode("send");
  h4.appendChild(h4Text);
  inputOption4.appendChild(i4);
  inputOption4.appendChild(h4);
  feedInputOptions.appendChild(inputOption4);

  post.appendChild(feedInputOptions);

  let feed = document.querySelector(".feed");
  feed.appendChild(post);
}
// Like ...
let like = document.querySelectorAll(".likeBtn");
like.forEach(function (e) {
  e.onclick = function () {
    e.classList.toggle("like");
    if (e.classList.contains("like")) {
      window.localStorage[
        `${e.parentElement.parentElement.attributes[1].value}`
      ] = true;
    } else {
      window.localStorage[
        `${e.parentElement.parentElement.attributes[1].value}`
      ] = false;
    }
  };
});

//Share ...
let share = document.querySelectorAll(".shareBtn");
share.forEach(function (e) {
  e.onclick = function () {
    window.open(""); // _blank ...
  };
});

// Comment ...
// Comment will be saved in console ...
let comment = document.querySelectorAll(".commentBtn");
comment.forEach(function (e) {
  e.onclick = function () {
    let comment1 = prompt(
      `Leave your comment here \n All the comment you will find it in the console`
    );
    console.log(
      `There is a comment : "${comment1}" on the Post Number : ${e.parentElement.parentElement.attributes[1].value.slice(
        1
      )}`
    );
  };
});

document.getElementById("inputText").onsubmit = function (e) {
  e.preventDefault();
  let txt = this.children[0].value.split("");
  let test = false;
  for (let j = 0; j < txt.length; j++) {
    if (!isNaN(+txt[j])) {
      test = true;
    }
  }
  let paragraph = document.querySelectorAll(".p");
  for (let j = 0; j < i; j++) {
    paragraph[j].innerHTML = this.children[0].value;
  }
  console.log(document.getElementById(`p${1}`).children[1].children.length);
  if (
    test == true &&
    document.getElementById(`p1`).children[1].children.length <= 2
  ) {
    for (let j = 0; j < i; j++) {
      let img = document.createElement("img");
      img.setAttribute("src", "wooky.png");
      img.setAttribute("id", "imgSize");
      document
        .getElementById(`p${j + 1}`)
        .children[1].appendChild(document.createElement("br"));
      document.getElementById(`p${j + 1}`).children[1].appendChild(img);
    }
  }
};
window.onload = function () {
  let paragraph = document.querySelectorAll(".p");
  for (let j = 0; j < i; j++) {
    if (localStorage[`p${j + 1}`] == "true") {
      document
        .getElementById(`p${j + 1}`)
        .children[2].children[0].classList.add("like");
    }
  }
};

//Car Class ...
class Car {
  constructor(model, make, velocity) {
    this.model = model;
    this.make = make;
    this.velocity = velocity;
  }
  add(a, b) {
    return a + b;
  }
  substract(a, b) {
    return a - b;
  }
}
let Car1 = new Car("C200", "Mercedes-Benz", "235 km/h");
let Car2 = new Car("720S", "McLaren", "341 km/h");
let Car3 = new Car("AMR Pro", "Aston Martin", "402 km/h");

console.log(
  `Car1{model: ${Car1.model} , Make: ${Car1.make} , Velocity: ${Car1.velocity}}`
);
console.log(
  `Car1{model: ${Car2.model} , Make: ${Car2.make} , Velocity: ${Car2.velocity}}`
);
console.log(
  `Car1{model: ${Car3.model} , Make: ${Car3.make} , Velocity: ${Car3.velocity}}`
);

console.log(Car1.add(20, 40));
console.log(Car2.substract(50, 14));
console.log(Car3.substract(10, 30));

// JSON variable ...
const person = '{"name" : "Ji Chang Wook" , "age" : 35 , "city" : "Cairo"}';
const converted = JSON.parse(person);

for (let j = 0; j < i; j++) {
  document.getElementById(
    `p${j + 1}`
  ).children[0].children[1].children[0].textContent = converted["name"];
}

document.getElementById("btn").onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  if (scrollY >= 300) {
    document.getElementById("btn").classList.remove("hide");
  } else {
    document.getElementById("btn").classList.add("hide");
  }
};

// Mode btn ...
let modeBtn = document.getElementById("modeBtn");
function mode() {
  if (localStorage.mode == "Dark") {
    document.getElementById("mode").attributes[1].value = "css/darkmode.css";
    modeBtn.children[0].textContent = " light_mode ";
    modeBtn.children[1].textContent = "Light Mode";
  } else {
    document.getElementById("mode").attributes[1].value = "css/lightmode.css";
    modeBtn.children[0].textContent = " mode_night ";
    modeBtn.children[1].textContent = "Dark Mode";
  }
}
modeBtn.onclick = function () {
  if (
    document.getElementById("mode").attributes[1].value == "css/lightmode.css"
  ) {
    localStorage.mode = "Dark";
  } else {
    localStorage.mode = "Light";
  }
  mode();
};
window.onload = mode();
