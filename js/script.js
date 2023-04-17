let first_cel = document.querySelector("#first_cal");
let second_cel = document.querySelector("#second_cel");

function handleFirstFormSubmit(event) {
    event.preventDefault();
    let first_cel_first_value = document.querySelector("#first_cel_first_value").value;
    let first_cel_second_value = document.querySelector("#first_cel_second_value").value;
    // alert(first_cel_first_value + " " + first_cel_second_value);
    let firsrFormAnswer = ((first_cel_first_value*100) / first_cel_second_value).toFixed(2);
    document.querySelector("#first_cal").innerHTML = `${first_cel_first_value} is ${firsrFormAnswer}% of ${first_cel_second_value}`;
    first_cel.style.cssText = "padding:10px;"
  }
  
  function handleSecondFormSubmit(event) {
    event.preventDefault();
    let second_cel_first_value = document.querySelector("#second_cel_first_value").value;
    let second_cel_second_value = document.querySelector("#second_cel_second_value").value;
    let secondFormAnswer = ((second_cel_first_value/100)*second_cel_second_value).toFixed(2);
    document.querySelector("#second_cel").innerHTML = `${second_cel_first_value}% of ${second_cel_second_value} is ${secondFormAnswer}`
    second_cel.style.cssText = "padding:10px;"
  }
  
  const firstForm = document.querySelector(".first_cal form");
  const secondForm = document.querySelector(".second_cal form");
  
  firstForm.addEventListener("submit", handleFirstFormSubmit);
  secondForm.addEventListener("submit", handleSecondFormSubmit);
  