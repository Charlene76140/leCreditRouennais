function validationRules(){
    // Object to send and handle requests
    let httpRequest = new XMLHttpRequest();
    // Function triggered at each change of state of the request
    httpRequest.onreadystatechange = function() {
        let ajaxContent = document.getElementById("ajaxContent");
        // When the server response has been received
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // If the answer is valid
            if (httpRequest.status === 200) {
                let data = httpRequest.responseText;
                ajaxContent.innerText = data;
            } 
            // If an error has occurred
            else {
                ajaxContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        // The server has not yet responded
        else {
            ajaxContent.innerText = "Requête en cours";
        }
    };
    // send request
    httpRequest.open('GET', 'securityRules.txt', true);
    httpRequest.send();
};
