
  
      // function to display a greeting alert
      // function displayGreeting() {
      //   alert(
      //     "Hey there! Your experience matters to us. Explore our website and tell us how we can make it better for you."
      //   );
      // }

      // When the window loads
      // window.onload=displayGreeting();
   
   //smooth scrolling behavior when anchor links are clicked
    document.addEventListener("DOMContentLoaded", function() {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(anchor => {
        anchor.addEventListener("click", function(e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    });
  
