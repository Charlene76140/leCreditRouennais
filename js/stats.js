function statistiques(){
    // Object to send and handle requests
    let httpRequest = new XMLHttpRequest();
    // Function triggered at each change of state of the request
    httpRequest.onreadystatechange = function() {
        let slotIndicateurs = document.getElementsByClassName("indicateurs");
        let slotValue = document.getElementsByClassName("value");
        let slotVaration = document.getElementsByClassName("variation");
        // When the server response has been received
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // If the answer is valid
            if (httpRequest.status === 200) {
                //variable get the response from server
                let data = JSON.parse(httpRequest.responseText); 
                //loop over length of data (server response).
                for(let i = 0; i < data.length; i++){
                    slotIndicateurs[i].innerText = data[i].Indicateur;
                    slotValue[i].innerText = data[i].Valeur;
                    slotVaration[i].innerText = data[i].Variation;
                }
            } 
            // If an error has occurred
            else {
                slotIndicateurs.innerText = "Nous n'avons pas réussi à récupérer les chiffres";
            }
        } 
        // The server has not yet responded
        else {
            slotIndicateurs.innerText = "Requête en cours";
        }
    };
    // send request
    httpRequest.open('GET', 'statistiques.json', true);
    httpRequest.send();
};