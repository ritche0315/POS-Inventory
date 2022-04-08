var controllerUrl = "../controllers/stock-controller.php";

window.addEventListener("load", init);

function init(){
    showAllStocks();
}

function insertStock(){

}

function updateStock(){

}

function deleteStock(){

}

function showAllStocks(){
    let xhr = createXMLHttpRequest("GET",controllerUrl+"?view-stocks", null);
    xhr.onload = () =>{
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
        }else{
            console.log("something wrong on the server");
        }
    }

}