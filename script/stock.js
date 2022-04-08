function createXMLHttpRequest(method,url,data){
    try {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        if (method == "POST") {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(data);

            return xhr;
        }

        xhr.send();
        return xhr;
    } catch (error) {
        console.log(error);
    }
}