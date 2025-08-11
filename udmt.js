function comvert() : void {}
let money = document.getElementById("money").value;
let from = document.getElementById("from").value;
let to = document.getElementById("to").value;

// ct chuyen doi: s = money * to /from
let result : number = money * to /from
// output
document.getElementById("result").innerHTML = result;