function articles(){
    // Object to send and handle requests
    let httpRequest = new XMLHttpRequest();
    // Function triggered at each change of state of the request
    httpRequest.onreadystatechange = function() {
        let nameArticle= document.getElementsByClassName("headerID");
        let title= document.getElementsByClassName("titre");
        let content = document.getElementsByClassName("contenu");
        // When the server response has been received
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // If the answer is valid
            if (httpRequest.status === 200) {
                //variable get the response from server
                let data = JSON.parse(httpRequest.responseText);
                console.log(nameArticle);
                //loop over the length of data (server response). The nameArticle, title and content variables take the value of data [i]
                for(let i = 0; i< data.length; i++){
                        console.log(i);
                    nameArticle[i].innerText = data[i].id;
                    title[i].innerText= data[i].titre;
                    content[i].innerText= data[i].contenu;
                }
            } 
            // If an error has occurred
            else {
                nameArticle.innerText = "Nous n'avons pas réussi à récupérer l'article";
            }
        } 
        // The server has not yet responded
        else {
            nameArticle.innerText = "Requête en cours";
        }
    };
    // send request
    httpRequest.open('GET', 'https://oc-jswebsrv.herokuapp.com/api/articles', true);
    httpRequest.send();
};