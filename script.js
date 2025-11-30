const input = document.getElementById("userAmount");
const btn = document.querySelectorAll("button");
const screen = document.querySelector("span");
const numberofPeople = document.getElementById("numberOfPeople");

const buttons = (e) => {
    if (isNaN(input)) {
      //if vlaue is not a number --> isNan()
      const tipAmount = (input.value / e.target.id) * 100;
      const percentage = (e.target.id/100) * 10;
      // screen.innerText = Number(tipAmount.toFixed(2)); //Format to 2 decimal places
      screen.innerText = percentage; //Format to 2 decimal places
    }else{
      console.log("Enter a valid number !");
    }
  // (e.target.id * input.value) / numberofPeople.value;
};

btn.forEach((element) => {
  element.addEventListener("click", buttons);
});
