const submit = document.getElementById("subBtn");

submit.addEventListener("click", () => {
  const input = document.getElementById("gNum").value;
  const output = document.getElementById("ptag");
  if (input) {
    console.log(input);
    output.innerText = "";
    //

    let socre = input;
    let grade;
    if (socre >= 90 && socre <= 100) {
      grade = "A+";
      output.innerText = `Your Grade is ${grade}`;
      output.style.color = "black";
    } else if (socre >= 70 && socre <= 89) {
      grade = "B+";
      output.innerText = `Your Grade is ${grade}`;
      output.style.color = "black";
    } else if (socre >= 60 && socre <= 79) {
      grade = "C+";
      output.innerText = `Your Grade is ${grade}`;
      output.style.color = "black";
    } else if (socre >= 50 && socre <= 59) {
      grade = "D+";
      output.innerText = `Your Grade is ${grade}`;
      output.style.color = "black";
    } else if (socre >= 40 && socre <= 49) {
      grade = "E+";
      output.innerText = `Your Grade is ${grade}`;
      output.style.color = "black";
    } else if (socre >= 0 && socre <= 39) {
      grade = "F+";
      output.innerText = `Your Grade is ${grade}`;
      output.style.color = "red";
    } else {
      grade = "Invalid Input";
      output.style.color = "red";
    }

    //
  } else {
    output.innerText = "Enter Grade Number";
    output.style.color = "red";
  }
});
