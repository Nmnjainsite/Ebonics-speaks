var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")
var btnTranslate = document.querySelector("#btn-translate");


var serverUrl = "	https://api.funtranslations.com/translate/ebonics.json";

function getUrl (text){
    return serverUrl + "?" + "text=" + text;
}


function clickHandler (inputText){
var inputText = txtInput.value;
  
fetch(getUrl(inputText))
.then(response => response.json())
.then(json => {
   
    return outputDiv.innerText = json.contents.translated;
})

    
}

btnTranslate.addEventListener ("click", clickHandler) 

