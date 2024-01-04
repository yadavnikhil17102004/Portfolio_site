document.addEventListener("DOMContentLoaded", function () {
    var myName = document.getElementById("myname");
    var im = "I'm ";
    var nameText = "Nikhil_yadav";
    var index = 0;
    var animationSpeed = 150; // Adjust the speed (larger values slow it down)

    function typeText() {
        if (myName) {
            myName.textContent = im + nameText.slice(0, index) ;
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
