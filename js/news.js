function articles(){
    // Object to send and handle requests
    let httpRequest = new XMLHttpRequest();
    // Function triggered at each change of state of the request
    httpRequest.onreadystatechange = function() {
        // When the server response has been received
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // If the answer is valid
            if (httpRequest.status === 200) {
                //variable get the response from server
                let data = JSON.parse(httpRequest.responseText);
                console.log(data);
                //loop over themeArticle length of data (server response).
                for(let i = 0; i < data.length; i++){
                    let section = document.querySelector('section');
                    section.innerHTML += '<div class="card text-center mt-5 sizeArticle"><div class="card-header">'+ data[i].id 
                    + '</div><div class="card-body"><h5 class="card-title">' + data[i].titre +'</h5><p class="card-text">'
                    + data[i].contenu +'</p></div><a class="btn colorButton sizeButton mb-4" href="#">En savoir plus</a></div>';
                }
            } 
            // If an error has occurred
            else {
                section.innerText = "Nous n'avons pas réussi à récupérer l'article";
            }
        } 
        // The server has not yet responded
        else {
            section.innerText = "Requête en cours";
        }
    };
    // send request
    httpRequest.open('GET', 'https://oc-jswebsrv.herokuapp.com/api/articles', true);
    httpRequest.send();
};