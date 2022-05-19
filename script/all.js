var toggleStatus = false;
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
    document.getElementById("logout").addEventListener("click", ()=>{
        if (confirm("Are you sure do you want to logout?")) {
            txt = "GoodByee :)";
            window.location.href = "../models/logout-model.php";
        } else {
            txt = "Cancelled!";
        }
        alert(txt);
    });
    
}


function toggleSideBar(){ 
    document.getElementById("toggle").addEventListener("click", ()=>{
        if(toggleStatus){
            showSideBar();
            toggleStatus = false;
        }else{
            hideSideBar();
            toggleStatus = true;
        }
    });
}

function hideSideBar(){
   const sb = document.querySelector(".sideBar");
   sb.style.animation = "hideSideBar 300ms ease-in forwards";
   const main = document.querySelector(".main");
   main.style.animation = "hideSideBarGridTemplate 200ms ease-in forwards";
   const nav = document.querySelector(".navigation");
   nav.style.animation = "hideSideBar 300ms ease-in forwards";
}
 
function showSideBar(){
    const sb = document.querySelector(".sideBar");
    sb.style.animation = "showSideBar 300ms ease-in forwards";
    const main = document.querySelector(".main");
    main.style.animation = "showSideBarGridTemplate 300ms ease-in forwards";
    const nav = document.querySelector(".navigation");
    nav.style.animation = "showSideBar 300ms ease-in forwards";
}

   

function loadItems(){
    setInterval(getDateTimeNow, 1000);
    logoutClicked();
    toggleSideBar();
}

window.addEventListener("load", loadItems);