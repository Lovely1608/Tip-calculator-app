const bill = document.getElementById("billAmount");
const btn = document.querySelectorAll("button");
const tipResult = document.getElementById("tip");
const totalResult = document.getElementById("total");
const people = document.getElementById("numberOfPeople");
const customTip = document.getElementById("CustomNumber");
const resetBtn = document.getElementById("reset");
const msg = document.getElementById("mesg");
const msg2 = document.getElementById("mesg2");

const buttons = (e) => {
  //Format number of US Dollar (USD)

  // let USDollar = new Intl.NumberFormat("en-us", {
  //   style: "currency",
  //   currency: "USD",
  // });
  const percentage = parseFloat(e.target.id); //ensures the percentage value in number
  const billValue = parseFloat(bill.value);
  const numberOfPeople = parseFloat(people.value);
  //check for valid inputs
  //if vlaue is not a number --> isNan()   (! --> NOT usecase)

  if ((!isNaN(billValue) && !isNaN(numberOfPeople)) || numberOfPeople < 0) {
    // calculate the Total Tip amount of the calculate value
    const totalTipAmount = billValue * (percentage / 100);

    // calculate the tip amount per person
    const tipPerPerson = totalTipAmount / numberOfPeople;

    // calculate the total amount of the calculate value
    const totalPerPerson = (billValue / totalTipAmount) * numberOfPeople;

    //display the result
    tipResult.innerHTML = parseFloat(tipPerPerson.toFixed(2)); //Format to 2 decimal

    totalResult.innerHTML = parseFloat(totalPerPerson.toFixed(2));

    bill.style.border = "";
    people.style.border = "";
  } else {
    bill.style.border = "solid 1px red";
    people.style.border = "solid 1px red";

    msg.innerHTML = "Enter valid input!";
    msg2.innerHTML = "Enter valid input!";
    msg.classList.add("add");
    msg2.classList.add("add");

    tipResult.innerHTML = "$ 0.00";
    totalResult.innerHTML = "$ 0.00";
  }
};

btn.forEach((element) => {
  element.addEventListener("click", buttons);
});

customTip.addEventListener("input", () => {
  const billValue = parseFloat(bill.value);

  const numberOfPeople = parseFloat(people.value);

  if ((!isNaN(billValue) && !isNaN(numberOfPeople)) || numberOfPeople < 0) {
    const customPercentage = parseFloat(customTip.value); //ensures the percentage value in number

    const totalCustomTipAmount = billValue * (customPercentage / 100);

    const tipPerPerson = totalCustomTipAmount / numberOfPeople;

    const totalPerPerson = (billValue / totalCustomTipAmount) * numberOfPeople;

    tipResult.innerHTML = parseFloat(tipPerPerson.toFixed(2)); //Format to 2 decimal

    totalResult.innerHTML = parseFloat(totalPerPerson.toFixed(2));

    totalResult.innerHTML = customPercentage;

    bill.style.border = "";
    people.style.border = "";
  } else {
    bill.style.border = "solid 1px red";
    people.style.border = "solid 1px red";

    tipResult.innerHTML = "$ 0.00";
    totalResult.innerHTML = "$ 0.00";

    
    msg.innerHTML = "Enter valid input!";
    msg2.innerHTML = "Enter valid input!";
    msg.classList.add("add");
    msg2.classList.add("add");
  }
});

resetBtn.addEventListener("click", () => {
  customTip.value = "";
  bill.value = "";
  tipResult.innerHTML = "";
  people.value = "";
  totalResult.innerHTML = "";
  tipResult.innerHTML = "$ 0.00";
  totalResult.innerHTML = "$ 0.00";
  bill.style.border = "";
  people.style.border = "";
  msg.innerHTML = "";
  msg2.innerHTML = "";
});
