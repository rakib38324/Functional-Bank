function getInputValueById(inputid){
    const inputFild = document.getElementById(inputid);
    const inputFildString = inputFild.value;
    
    const inputAmount = parseFloat(inputFildString);
    inputFild.value = '';
    
    return inputAmount;

}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString =element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElementValue(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}