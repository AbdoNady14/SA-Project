        let navButton = document.querySelector("#iconNav");
        let navMenu = document.querySelector("#navMenu");
        navButton.addEventListener("click", function () {
          if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
          } else {
            navMenu.style.display = "block";
          }
        });

        if (localStorage.getItem("loggedInUser") !== null) {
          document.getElementById("logIn").style.display = "none";
          document.getElementById("logOut").style.display = "block";
        }

        function logout() {
          document.getElementById("logIn").style.display = "block";
          document.getElementById("logOut").style.display = "none";
          localStorage.removeItem("signEmail");
          localStorage.removeItem("signPassword");
          localStorage.removeItem("loggedInUser");
          window.location.href = "index.html";
        }