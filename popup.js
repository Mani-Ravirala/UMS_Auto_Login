$(document).ready(function () {
    var userIdField = document.getElementById("check");
    var savePassField = document.getElementById("checkfuture");
    var enableField = document.getElementById("enable");
    
    chrome.storage.sync.get(["saveUserId"], function (get) {
        if (get.saveUserId == true) {
            userIdField.checked = true;
            chrome.storage.sync.get(["userId"], function (get) {
                $("#textbtn").val(get.userId);
            });
        } else if (get.saveUserId == false) {
            userIdField.checked = false;
        }
    });

    chrome.storage.sync.get(["savePassword"], function (get) {
        if (get.savePassword == true) {
            savePassField.checked = true;
            chrome.storage.sync.get(["pass"], function (get) {
                $("#passbtn").val(get.pass);
            });
        } else if (get.saveUserId == false) {
            savePassField.checked = false;
        }
    });

    chrome.storage.sync.get(["enable"], function (get) {
        if (get.enable == true) {
            enableField.checked = true;
        } else if (get.saveUserId == false) {
            enableField.checked = false;
        }
    });
});

$(function () {
    var userIdField = document.getElementById("check");
    var savePassField = document.getElementById("checkfuture");
    var enableField = document.getElementById("enable");
    var alertp = document.getElementById("alertp")
    $("#loginbtn").click(function () {
        var name = $("#textbtn").val();
        var pass = $("#passbtn").val();
        if (pass.length === 0 || name.length === 0) {
            alertp.innerHTML = "*Enter your RegNo or Password";
        } else {
            chrome.storage.sync.set({ userId: name });
            chrome.storage.sync.set({ pass: pass });
            chrome.storage.sync.set({ saveUserId: userIdField.checked });
            chrome.storage.sync.set({ savePassword: savePassField.checked });
            chrome.storage.sync.set({ enable: enableField.checked });
            window.close();
        }
    });
});