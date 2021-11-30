// Get all elementById here
const inpKey = document.getElementById("inpKey");
const inValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");
const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");
const remainingBalance = document.getElementById("remaining");
const isOutputdiv = document.getElementById('outputDiv')
let itemList = []

// Button function adding to divs
btnInsert.onclick = function (){
      const key = inpKey.value;
      const value = inValue.value;
      const select = document.querySelector("select")

// Add budget and expenses in divs
if (select.value=="plus"){
      lsOutput.innerHTML +=`${key}: ${value}<br />`;
      isOutputdiv.textContent = value;
      console.log(isOutputdiv)
} else if (select.value =="minus"){
      lsInput.innerHTML += `${key}: ${value}<br />`
      itemList.push(value)
      console.log(itemList)
      totalExpense()
      showBalance();
} else if (select.value == "choose") {
      alert("Stop! You must choose an operator.");
} 

// Subtract expense from Income and inserts answer inside "Remaining"
     function  totalExpense() {
            let total = 0
          const  itemLists = itemList.map((i) => Number(i));
            if (itemLists.length > 0) {
            total = itemLists.reduce(function (acc) {
            acc += Number(value);
            return acc;
            }, 0)
            } 
            console.log(total)
            return total;
      }

      
      function showBalance() {
            const expense = totalExpense();
            const total = Number(isOutputdiv.textContent) - expense;
            console.log(lsOutput.textContent)
            console.log(expense)
            remainingBalance.textContent = total;


      };
}
