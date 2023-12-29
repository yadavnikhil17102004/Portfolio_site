document.addEventListener("DOMContentLoaded", function () {
    var myName = document.getElementById("myname");
    var greeting = "Hi, ";
    var nameText = "I'm Nikhil_yadav !!";
    var index = 0;
    var animationSpeed = 150; // Adjust the speed (larger values slow it down)

    function typeText() {
        if (myName) {
            myName.textContent = greeting + nameText.slice(0, index);
            index++;

            if (index > nameText.length) {
                index = 0; // Reset the index to restart the animation
            }
        } else {
            console.error("Element with ID 'myName' not found.");
        }

        setTimeout(function () {
            requestAnimationFrame(typeText);
        }, animationSpeed);
    }

    typeText(); // Initial call to start the animation
});
