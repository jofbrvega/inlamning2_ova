// Get all elementById here
const inpKey = document.getElementById("inpKey");
const inValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");
const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");
const option = document.getElementsByClassName("select");

btnInsert.onclick = function (){
      const key = inpKey.value;
      const value = inpValue.value;

      // Calculator effect
if (option.value === "+"){
      lsOutput.innerHTML +=`${key}: ${value}<br />`;
} else {
      lsInput.innerHTML += `${key}: ${value}<br />`;
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
