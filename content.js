var user = document.getElementById("txtU");
var pass = document.getElementById("TxtpwdAutoId_8767");
// var loginButton = document.getElementById("iBtnLogins");
var loginButton = document.querySelector("input[type='submit']");
var loginDiv = document.querySelector(".login_button");
var username, password;

if (loginDiv) {
  loginDiv.style.display = "flex";
  loginDiv.style.left = "230px";
}

function filldet() {
  chrome.storage.sync.get(["userId", "pass"], function (get) {
    username = get.userId;
    password = get.pass;
    fillLoginForm(username, password);
  });
}

function fillLoginForm(username, password) {
  if (user && pass) {
    user.value = username;
    pass.value = password;
    loginButton.click();
  }
}


chrome.storage.sync.get(["enable"], function (get) {
  enableBool = get.enable;
  console.log(get.enable)
  console.log("Out")
  if (enableBool){
    console.log(get.enable)
    console.log("Inside")
    filldet();
  }
});



// function runExtension() {
//   if (loginButton) {
//     const button = document.createElement("input");
//     button.type = "button";
//     button.value = "Login";
//     button.id = "button_1";
//     button.className = "btn btn-primary btn-sm";
//     button.style.marginLeft = "10px";
//     button.style.width = "64px";
//     button.style.height = "64px";
//     button.style.borderRadius = "50%";
//     button.style.border = "none";
//     button.style.cursor = "pointer";
//     button.style.backgroundColor = "#2ECC71";
//     // button.style.color = "white";
//     button.style.boxShadow =
//       "5px 3px 3px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.19)";
//     const element = document.querySelector(".login_button");
//     element.appendChild(button);
//     button.addEventListener("click", function () {
//       filldet();
//     });
//   }
// }

// if (loginButton) {
//   runExtension();
// }

// chrome.storage.sync.get(["userId", "pass"], function (get) {});
