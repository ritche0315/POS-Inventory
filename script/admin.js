
function showChart(){
    var year1 = "2021";
    var year2 = "2022";
    var yearValue1= 20000;
    var yearValue2= 10000;
    
    var xValues = [year1, year2];
    var yValues = [yearValue1, yearValue2, 0];
    var barColors = ["green", "green"];

    new Chart("myChart", {
        type: "bar",
        data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
        },
        options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Yearly Sales"
        }
        }
    });
}

function loadItems(){
    
    showChart();
    showDateTime();
    setInterval(showDateTime, 1000);
    
}

window.addEventListener("load", loadItems);