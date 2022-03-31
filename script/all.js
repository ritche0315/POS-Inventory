function showDateTime(){
    
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour;
    document.getElementById("idTime").textContent = hour + ":" + min + ":" + sec;
    document.getElementById("am_pm").textContent = am_pm;
    
    // Get Current Date
    var mydate=new Date();
    var year=mydate.getYear();
    if (year < 1000){
        year+=1900;
    }


    var day=mydate.getDay(); 
    var month=mydate.getMonth(); 
    var daym=mydate.getDate(); 
    var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday",
                "Friday","Saturday");
    var montharray=new Array("January","February","March","April","May","June",
                "July","August","September","October","November","December");

    document.getElementById('idDate').textContent = dayarray[day]+", "+montharray[month]+" "+daym+", "+year;
}
function logoutClicked(){
    if (confirm("Are you sure do you want to logout?")) {
        txt = "GoodByee :)";
        window.location.href = "../models/logout-model.php";
    } else {
        txt = "Cancelled!";
    }
    alert(txt);
}



function loadItems(){
    showDateTime();
    setInterval(showDateTime, 1000);
    
}

window.addEventListener("load", loadItems);