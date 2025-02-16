let isDisplayed = false;
const type = document.getElementById('screen')

const showDisplay = (input) => {
    if(isDisplayed){
        type.value = '';
        isDisplayed = false;
    }
    type.value += input;
}

const clearDisplay = () => {
        type.value = "";
        isDisplayed = false;
}

const calculate = () => {
    const result = eval(type.value);
    type.value = result;

    try{
        const result = eval(type.value);
        type.value = result;
        isDisplayed = true;
    }catch(e){
        type.value = 'Error';
        isDisplayed = false;
    }
}

