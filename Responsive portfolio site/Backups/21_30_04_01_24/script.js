
//Index page text animetion start
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
        } 

        setTimeout(function () {
            requestAnimationFrame(typeText);
        }, animationSpeed);
    }

    typeText(); // Initial call to start the animation
});

//Index page text animetion end

// Theme on off switches start
document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");
  
    // Event listener for theme switch
    themeSwitch.addEventListener("change", function () {
      document.body.classList.toggle("dark");
      document.body.classList.toggle("light");
  
      // Save user's preference for future visits
      const selectedTheme = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", selectedTheme);
    });
  });
  // Checking user's preferred color scheme and applying it on page load

  // Theme on off switches end

  