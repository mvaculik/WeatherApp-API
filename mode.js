//Switch dark||light mode
const cb = document.getElementById('checkbox');
cb.addEventListener("change", updateMode);
updateMode();

function updateMode() {
  document.body.style.backgroundColor = cb.checked ? "white" : "black";
  document.getElementById("ball").style.transform = cb.checked ? "translateX(0px)" : "translateX(24px)";
}

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("checkbox");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        document.body.style.background = "#fff";
        document.getElementById("main").style.backgroundImage = "url('phone_light.png')";
        document.getElementById("temp").style.color = "#000";
        document.getElementById("city").style.color = "#000";
        document.getElementById("descrip").style.color = "#000";
        document.getElementById("country").style.color = "#000";
        document.getElementById("time").style.color = "#000";
        document.getElementById("day").style.color = "#000";
        document.getElementById("date").style.color = "#000";
        document.getElementById("min").style.color = "#000";
        document.getElementById("max").style.color = "#000";

        document.getElementById("BotRow").style.borderBottom = "0.5px solid #000";
        document.getElementById("BotRow").style.borderTop = "0.5px solid #000";

        document.getElementById("search-box").style.color = "#000";
        document.getElementById("search-box").style.background = "rgba(0, 0, 0, 0.178)";

        document.getElementById("ball").style.transform = "translateX(0px)";
        

    } else {
        document.body.style.background = "rgba(0, 0, 0, 0.95)";
        document.getElementById("main").style.backgroundImage = "url('phone_dark.png')";
        document.getElementById("temp").style.color = "#fff";
        document.getElementById("city").style.color = "#fff";
        document.getElementById("descrip").style.color = "#fff";
        document.getElementById("country").style.color = "#fff";
        document.getElementById("time").style.color = "#fff";
        document.getElementById("day").style.color = "#fff";
        document.getElementById("date").style.color = "#fff";
        document.getElementById("min").style.color = "#fff";
        document.getElementById("max").style.color = "#fff";

        document.getElementById("BotRow").style.borderBottom = "0.5px solid #747474";
        document.getElementById("BotRow").style.borderTop = "0.5px solid #747474";

        document.getElementById("search-box").style.color = "#fff";
        document.getElementById("search-box").style.background = "rgba(255, 255, 255, 0.2)";

        document.getElementById("ball").style.transform = "translateX(24px)";
    }
  }