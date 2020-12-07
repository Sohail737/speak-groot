var inputText=document.querySelector("#txt-input");
var outputText=document.querySelector("#txt-output");
var buttonClick=document.querySelector("#btn-click");
var resetButton=document.querySelector("#reset");
const url="https://api.funtranslations.com/translate/groot.json"

function constructUrl(text){
    return url + "?" + "text="+text
}
function errorHandler(error){
    console.log("error occured : "+ error);
    
    alert("Something went wrong, please try again later");
}

function resetAll(){
    inputText.value="";
    outputText.innerText="";
}

function clickHandler(){
    fetch(constructUrl(inputText.value))
    .then(res=>res.json())
    .then(json=>{
        let translatedText=json.contents.translated;
        outputText.innerText=translatedText;
    }).catch(errorHandler)
}

buttonClick.addEventListener("click",clickHandler)

resetButton.addEventListener("click",resetAll);