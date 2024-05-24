(function () {
  let message = {
    error_message: '"let this input be up to 7 character"',
  };
  /* for login page required */
  function required() {
    document.querySelectorAll(".login-input").forEach((input) => {
      if (input.value.length < 7) {
        let ID = input.id;
        let label = document.getElementById(ID + "1");
        if (display == 0) {
          input.classList.add("required");
          label.innerHTML = message.error_message;
          label.classList.add("label-appear");
          setTimeout(() => {
            document.getElementById("Username").remove &&
              document.getElementById("password").remove;
            input.classList.remove("required");
          }, 3000);
        } else {
          document
        }
      }
    });
  }
  let button = document.querySelector(".btn");
  button.addEventListener("click", required);

  /* for the animation of login to sign up */
  let display = 0;
  let animation = document.querySelector("#animation-box");
  function sign_click() {
    if (display == 0) {
      animation.classList.add("click-fromRight");
      animation.classList.remove("click-fromLeft");
      display = 1;
      document.querySelectorAll(".hidden-show").forEach((input) => {
        input.classList.toggle("hidden");
        input.classList.toggle("sign-up");
      });
      document.querySelectorAll("label").forEach((label) => {
        label.innerHTML = "";
      });
    }
    console.log(display);
  }

  function login_click() {
    if (display == 1) {
      animation.classList.add("click-fromLeft");
      animation.classList.remove("click-fromRight");
      display = 0;
      document.querySelectorAll(".hidden-show").forEach((input) => {
        input.classList.toggle("hidden");
        input.classList.toggle("sign-up");
      });
    }

    console.log(display);
  }
  let login = document.querySelector("#login");
  let signUP = document.querySelector("#sign");
  signUP.addEventListener("click", sign_click);
  login.addEventListener("click", login_click);
})();
