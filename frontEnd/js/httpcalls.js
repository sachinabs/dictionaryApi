function hide() {
    let div = document.getElementById('answer');
    div.style.display = "none";
    let danger = document.getElementById('danger');
    danger.style.display = "none"
}

function closebtn() {
    let close = document.getElementById('danger');
    close.style.display="none"
}

function sendRequest() {


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let sendReq = document.getElementById('floatingInput').value;
    var httpRequestForOneData = new XMLHttpRequest();
    httpRequestForOneData.onreadystatechange = function () {
        if (this.status == 404) {
            let danger = document.getElementById('danger');
            danger.style.display = "block";
           
        }
        else {
            if (this.readyState == 4 && this.status == 200) {



                let div = document.getElementById('answer');
                div.style.display = "block";

                let responses = JSON.parse(this.response);

                let key = document.getElementById('Key');
                key.innerHTML = capitalizeFirstLetter(responses[0].word);

                let part = document.getElementById('partOfSpeech');
                part.innerHTML = capitalizeFirstLetter(responses[0].meanings[0].partOfSpeech);

                let m = document.getElementById('def');
                m.innerHTML = capitalizeFirstLetter(responses[0].meanings[0].definitions[0].definition);

                let org = document.getElementById("orgin");
                org.innerHTML = capitalizeFirstLetter(responses[1].origin);
                //    `console.log(responses[1].origin);


            }
        }

    };
    httpRequestForOneData.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/" + sendReq, true);
    httpRequestForOneData.send();
}