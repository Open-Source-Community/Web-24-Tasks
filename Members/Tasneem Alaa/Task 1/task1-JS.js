document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementsByClassName('inputOption');
    const len = button.length;
    
    // console.log(button);
    
    
    for (let i = 0; i < len; i++) {
        const oneButton = button[i];
        const buttonText = oneButton.childNodes[3];
        const buttonIcon = oneButton.childNodes[1];

        //1st task : click on like => Like icon & text be blue ;
        if (buttonText.innerHTML == 'Like'){
        function likeColor() {
            var currentColorText = buttonText.style.color;
            var currentColorIcon = buttonIcon.style.color;
            buttonText.style.color= (currentColorText !== 'blue') ? 'blue' : 'gray';
            buttonIcon.style.color= (currentColorIcon !== 'blue') ? 'blue' : 'gray';
        }
        oneButton.onclick = likeColor;
        // console.log(buttonText.innerHTML);
        }
        //2nd Task : click on comment => open a prompt pop-up
        if (buttonText.innerHTML == 'Comment'){
        function pop_up() {
            window.prompt("Please,\nEnter your comment here", "No Comment"); 
        }
        oneButton.onclick = pop_up;
        // console.log(buttonText.innerHTML);
    }
    //3rd Task : click on share => open a new window
    if (buttonText.innerHTML == 'Share'){
        function shareWindow() {
            window.open("", "", "width=1920,height=800");
        }
        oneButton.onclick = shareWindow;
        // console.log(buttonText.innerHTML);
        }
    }

    //4th task : input field => instead of "Message here"
    const messageInput = document.getElementsByClassName('feed__input')[0];
    const inputElement = messageInput.querySelector('input');

    const messageOutput = document.getElementsByClassName('post__body');
    for (let i = 0; i < messageOutput.length; i++) {

        const messageText = messageOutput[i].querySelector('p');

        inputElement.addEventListener('input', function() {
            writeTheMessage();
        });

        function writeTheMessage() {
            const inputValue = inputElement.value;

            // console.log(inputValue);

            //task 5 : when the input contains number => add an image to the post
            const containsNumber = /\d/.test(inputElement.value);

            const previousImages = messageOutput[i].querySelectorAll('img');
            previousImages.forEach(img => img.remove());
    
            if (containsNumber) {
                // console.log('Input contains a number');

                const imageElement = document.createElement('img');
                imageElement.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif6ffu_tznckP4f2g778-3m5ClwbqxX5ttgY5Rwtsx0LhXnHfM4wkg-7imzlSrcZbb0-JXEkyqpYqENSDn6h0X2tfZmDPlaaB1w4wpf-b8_NNvxiy6xtOyo_VT0BSRwHDbcqaPTcc3qCS7wzkTspBd4j3VhHcTJcqfVEX_Qapiw4zSqSSXAACiqv7w/s2250/%D8%AC%D9%88%D8%AC%D9%84.png';
        
                imageElement.alt = 'Description of the image';
                imageElement.style.width = '300px';
        
                const imageContainer = document.getElementsByClassName('post__body');
                imageContainer[i].appendChild(imageElement);
            } 
            
            messageText.innerHTML = inputValue;
        }
    }
    //last task 
    const personJSON = '{"name": "Tasneem", "age": 19, "city": "Cairo"}';
    const personObject = JSON.parse(personJSON);
    const postInfoElements = document.getElementsByClassName('post__info');
    
    for (let i = 0; i < postInfoElements.length; i++) {
        const oneElement = postInfoElements[i];
        const postInfo = oneElement.childNodes[1];
        postInfo.innerHTML = `Name: ${personObject.name}, Age: ${personObject.age}, City: ${personObject.city}`;
    }    
});

//Task 5 & 6 : make class car and 3 objects
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
const car1 = new Car('Model1', 'Make1', 100);
const car2 = new Car('Model2', 'Make2', 120);
const car3 = new Car('Model3', 'Make3', 150);

// Display car data in the console
console.log("Car 1:", car1);
console.log("Car 2:", car2);
console.log("Car 3:", car3);
