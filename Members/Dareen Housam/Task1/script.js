var like = document.querySelectorAll(".like");
var share = document.querySelectorAll(".share");
var comment = document.querySelectorAll(".comment");
var message = document.querySelectorAll(".post__body p");
var inputText = document.querySelector(".messag");
var info = document.querySelectorAll(".post__info h2");
like.forEach(function (likeBtn) {
    likeBtn.onclick = function () {
        likeBtn.firstElementChild.style.color = "blue";
        likeBtn.style.color = "blue";
    }
})
share.forEach(function (shareBtn) {
    shareBtn.onclick = function () {
        window.open();
    }
})
comment.forEach(function (commentBtn) {
    commentBtn.onclick = function () {
        window.prompt("Write Your Comment: ");
    }
})
inputText.addEventListener('input', function () {
    message.forEach(function (mess) {
        mess.textContent = inputText.value;
    })
})

class Car {
    constructor(model, make, velocity) {
        this.model = model;
        this.make = make;
        this.velocity = velocity;
    }
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
}
var car1 = new Car(2023, "Tesla", "90 mph")
var car2 = new Car(2022, "BMW", "70 mph")
var car3 = new Car(2021, "Ford", "80mph")
console.log("First car content: " + car1.model + " , " + car1.make + " , "+ car1.velocity)
console.log("First car content: " + car2.model + " , " + car2.make + " , " + car2.velocity)
console.log("First car content: " + car3.model + " , " + car3.make + " , " + car3.velocity)

const person = {
    "name": "Dareen",
    "age": 19,
    "city": "cairo"
};
info.forEach(function (infoh2) {
    infoh2.innerHTML = person.name + " , " + person.age + " , " + person.city;
})