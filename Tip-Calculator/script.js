/* 
APP: Tip Calculator

These are the 3 functions used 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()
*/
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// Calculate the total bill per person
const calculateBill = () => {
    // Bill from user input & converted it into a number 
    const bill=Number(billInput.value);
    // Tip from user converted into a percentage (divide by 100)
    const tipPercentage=Number(tipInput.value)/100;
    // Total tip amount
    const tipAmount=bill*tipPercentage;
    // calculated the total (tip amount + bill)
    const total=tipAmount+bill;
    // calculated the per person total (total divided by number of people)
    const perPersonTotal=total/numberOfPeople;
    // updated the perPersonTotal on DOM & shown it to user
  perPersonTotalDiv.innerText=`₹${perPersonTotal.toFixed(2)}`
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople++;
    // updated the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople;
    // calculated the bill based on the new number of people
  calculateBill();
  }
  
  // ** Splits the bill between fewer people **
    const decreasePeople = () => {
    if(numberOfPeople<=1)
        return;
    else{
    // decrement the amount of people
        numberOfPeople--;
    // update the DOM with the new number of people
        numberOfPeopleDiv.innerText=numberOfPeople;
    // calculate the bill based on the new number of people
        calculateBill();
    }
  
  }
