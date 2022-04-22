function getDateTimeNow(){

    var timeObj = new Date();

    let hour = timeObj.getHours();
    let min = timeObj.getMinutes();
    let sec = timeObj.getSeconds();
    let ampm = "AM";

    if(hour > 12){
        hour -= 12;
        ampm = "PM";
    }
    
    if (hour == 0) {
        ampm = "AM";
    }


    if(hour < 10){
        hour = "0"+hour
    }
    if(min < 10){
        min = "0"+min
    }
    if(sec < 10){
        sec = "0"+sec
    }

    var date1 = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
  
    document.getElementById("time").textContent =  hour+":"+min+":"+sec+" "+ampm;
    document.getElementById("date").innerHTML = date1.toLocaleDateString([], options);
}
function logoutClicked(){
    document.getElementById("sidebar-logout-btn").addEventListener("click", ()=>{
        if (confirm("Are you sure do you want to logout?")) {
            txt = "GoodByee :)";
            window.location.href = "../models/logout-model.php";
        } else {
            txt = "Cancelled!";
        }
        alert(txt);
    });
    
}


function toggleHideShow(){
    
    let toggleButton = document.getElementsByClassName("toggle-button")[0];
    toggleButton.addEventListener("click", ()=>{
        hide();
    });
}

function hide(){
    let main = document.getElementsByClassName("main")[0];
    main.style.gridTemplateColumns = "100px 2fr";

    let sideBar = document.getElementsByClassName("side-bar")[0];

    sideBar.style.overflow = "hidden";

    let elWrapper = document.createElement("div");
    elWrapper.style.backgroundColor = "green";
    elWrapper.style.gridArea = "area-side-bar";
    sideBar.appendChild(elWrapper);
}

function loadItems(){
    setInterval(getDateTimeNow, 1000);
    logoutClicked();
    toggleHideShow();
}

window.addEventListener("load", loadItems);