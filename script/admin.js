
function showChart(){
    var year1 = "2021";
    var year2 = "2022";
    var yearValue1= 20000;
    var yearValue2= 10000;
    
    var xValues = [year1, year2];
    var yValues = [yearValue1, yearValue2, 0];
    var barColors = ["#0D47A1","#2196F3"];

    new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "Yearly Sales"
          }
        }
      });
}

function loadItems(){
    
    showChart();
    
}

window.addEventListener("load", loadItems);