//this part is to make like button blue
var like=document.querySelectorAll(".like")
like.forEach(function(element) {
  element.onclick=function(){
    element.style.color='blue';
    element.firstElementChild.style='blue'
  }
});

//this part is to open window when clicking on share 
var share=document.querySelectorAll(".share")
share.forEach(function(shareElement){
  shareElement.onclick=function(){
    window.open();
  }
})
//this part is to open prompt when clicking on comment
var comment=document.querySelectorAll(".comment")
comment.forEach(function(commentElement){
  commentElement.onclick=function(){
    prompt("write your comment hare : ")
  }
})
//change the content of the message of the post
var messageContent=document.querySelectorAll(".message");
var inputText=document.querySelector('.input')
var postImage=document.querySelectorAll(".image")
function code1(){
  var last=inputText.value.charAt(inputText.value.length-1)
  console.log(last)
  if((0+ +last)>0&&(0+ +last)<10)
  {
    var image=document.createElement("img")
    image.setAttribute("src","image1.jpg")
    image.style.width="250px"
    image.style.height="150px"
    postImage.forEach(function(imageElement){
      imageElement.appendChild(image)
    })
  }
  messageContent.forEach(function(messageElement){
    messageElement.textContent=inputText.value
  })
}
inputText.oninput=code1;
//car class and its info
class Car{
  constructor(model, make, velocity){
    this.model=model
    this.make=make
    this.velocity=velocity
  }
  add(a,b){
    return a+b;
  }
  subtract(a,b){
    return a-b;
  }
}

var car1=new Car("Ford",2024,220);
var car2=new Car("BMW",2022,250);
var car3=new Car("MG",2021,200);

console.log("first car : "+car1.model+" "+car1.make+" "+car1.velocity+"km/h")
console.log("second car : "+car2.model+" "+car2.make+" "+car2.velocity+"km/h")
console.log("third car : "+car3.model+" "+car3.make+" "+car3.velocity+"km/h")

//person json 
var personJson='{"name":"Ahmed","city":"Cairo","age":"20"}'
var personObject=JSON.parse(personJson);
var postInfo=document.querySelectorAll(".post__info h2");
postInfo.forEach(function(postElement){
  postElement.innerHTML=personObject.name+","+personObject.city+","+personObject.age
})
