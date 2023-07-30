const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector(".display .input");
const displayOutput = document.querySelector(".display .output");

let input = "";

for (let key of keys){
    const value = key.dataset.key;

    key.addEventListener("click", () => {
        if (value === "clear"){
            input = "";
            displayInput.innerHTML = "";
            displayOutput.innerHTML = "";
        }
        else if(value === "delete"){
            input = input.slice(0,-1);
            displayInput.innerHTML = input; 
        }
        else if(value === "="){
            let result = eval(input);
            displayOutput.innerHTML = result;
            input = result;
        }
        else if (value === "brackets-start"){
            input += "(";
            displayInput.innerHTML = input;
        }
        else if (value === "brackets-end"){
            input += ")";
            displayInput.innerHTML = input;
        }
        else if (value === "^"){
            let ans = Math.pow(input, 2);
            displayInput.innerHTML = input + "**2";
            input = ans;
            displayOutput.innerHTML = ans;
        }
        else if (value === "root"){
            let ans = Math.pow(input, 0.5);
            displayInput.innerHTML = "√" + input;
            input = ans;
            displayOutput.innerHTML = ans;
        }
        else if (value === "fact"){
            let factAns = factorialize(input);
            displayInput.innerHTML = input + "!";
            input = factAns;
            displayOutput.innerHTML = factAns;
        }
        else if(value === "%"){
            let ans = input / 100;
            input = ans;
            displayInput.innerHTML = input;
            displayOutput.innerHTML = ans;
        }
        else{
            input += value;
            displayInput.innerHTML = input;
        }
    })
}

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
}
