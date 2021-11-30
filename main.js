// Get all elementById here
const inpKey = document.getElementById("inpKey");
const inValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");
const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");

// Button function adding to divs
btnInsert.onclick = function (){
      const key = inpKey.value;
      const value = inpValue.value;
      const select = document.querySelector("select")

// Add budget and expenses in divs
if (select.value=="plus"){
      lsOutput.innerHTML +=`${key}: ${value}<br />`;
} else if (select.value =="minus"){
      lsInput.innerHTML += `${key}: ${value}<br />`;
} else if (select.value == "choose") {
      alert("Stop! You must choose an operator.");
} 

// Subtract expense from Income and inserts answer inside "Remaining"
function showRemaining(){
var div1 = value.parseFloat(document.getElementById('lsOutput').value);
var div2 = value.parseFloat(document.getElementById('lsInput').value);

if (div1>=div2){
      document.getElementById('remaining').value = div1 - div2;
}

}


// Local storage
//       if (key && value){
//             localStorage.setItem(key, value);
//             location.reload();
// };
//       for (let i = 0; i < localStorage.length; i++){
//             const key = localStorage.key(i);
//             const value = localStorage.getItem(key);

//       lsOutput.innerHTML += `${key}: ${value}<br />`;
// };
}
