// Get all elementById here
const inpKey = document.getElementById("inpKey");
const inValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");
const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");
const select = document.getElementsByClassName("select");

// Funktionen för denna kommer längre ner
const inkomstLista = [];
const kostnadLista = [];

// Function for the addSum and put it in localstorage + Balance div
btnInsert.onclick = function (){
      const key = inpKey.value;
      const value = inpValue.value;
      
      let costSum = 0;
      let incomeSum = 0;

      if (key && value){
            localStorage.setItem(key, value);
            location.reload();
      } 
};
for (let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      lsOutput.innerHTML += `${key}: ${value}<br />`;
}

