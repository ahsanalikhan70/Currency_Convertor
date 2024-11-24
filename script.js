// let api = "https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json";

// const dropdowns = document.querySelectorAll(".dropdown select");

// for (select of dropdowns){
//     for(currcode in countryList){
//         let newoption = document.createElement("option")
//         newoption.innerText = currcode;
//         newoption.value = currcode;
//         select.append(newoption);
//     }
// }
// console.log(dropdowns);


// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//   let response = await fetch(URL);
//   let data = await response.json();
//   let rate = data[toCurr.value.toLowerCase()];

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });


const amount = document.querySelector(".amount")
const convertedamount = document.querySelector(".convertedamount")
const fromCurr = document.querySelector(".from")
const toCurr = document.querySelector(".to")
const result = document.querySelector(".result")

const countries =[
  {code : "USD"  , name :" United States Dollar"},
  {code : "INR"  , name :" Indian Rupee" }
  ];

countries.forEach(country => {
  const option1 = document.createElement("option")
  option1.value = country.code;
  option1.textContent = `${country.code} (${country.name})`;
  fromCurr.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = country.code;
  option2.textContent = `${country.code} (${country.name})`;
  toCurr.append(option2)

  option1.style.backgroundColor="black";
  option1.style.color="rgb(194, 191, 191)";
  option1.style.fontSize="14px"


  option2.style.backgroundColor="black";
  option2.style.color="rgb(194, 191, 191)";
  option2.style.fontSize="14px"

 



  fromCurr.value = "INR";
  toCurr.value = "USD";

});

const getexchangerates = async () => {
  const inputamount = parseFloat(amount.value);
  const fromCurrency = fromCurr.value;
  const toCurrency = toCurr.value;

  // const response =  await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_c04fBPmM8tKegyR0vpRlwjhn1FibZvJKnzKNEz9m`);
  // const response =  await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_c04fBPmM8tKegyR0vpRlwjhn1FibZvJKnzKNEz9m&currencies=${fromCurrency}`);

  // const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_c04fBPmM8tKegyR0vpRlwjhn1FibZvJKnzKNEz9m&currencies=${fromCurrency}`);
  // const response = await fetch(`https://api.freecurrencyapi.com/v1/${fromCurrency}`);
  // const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_c04fBPmM8tKegyR0vpRlwjhn1FibZvJKnzKNEz9m&currencies=${fromCurrency}`);
  const response = await fetch(`https://v6.exchangerate-api.com/v6/7ac0aa3f22cf9fcb996dda4d/latest/${fromCurrency}`);

  const data = await response.json();


  // console.log(newdata);
  const conversionrates = data.conversion_rates[toCurrency];
  const finalamount =  (inputamount * conversionrates);

  
  convertedamount.value = finalamount;

  if(inputamount >= 0){
    result.innerText = ` ${inputamount} ${fromCurr.value} = ${convertedamount.value} ${toCurr.value}`
    result.style.color="white"
    result.style.display = "flex";
  
  }
  else {
    result.style.display = "none";
  }
    
  

}

amount.addEventListener('input' ,getexchangerates)
fromCurr.addEventListener('change' , getexchangerates)
toCurr.addEventListener('change' , getexchangerates)
window.addEventListener('load' , getexchangerates)