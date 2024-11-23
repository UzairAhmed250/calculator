let input = document.getElementById('inputbox');
console.log("inputbox", inputbox)

let button = document.querySelectorAll('button');
console.log("button",button) 
let string =""
let arr = Array.from(button);
console.log("arr", arr)
arr.forEach(button => {
    button.addEventListener('click', (e) =>  {
       console.log('e',e)
        if (e.target.innerHTML == "="){
        string = eval(string); 
        console.log("string", string)
        input.value = string;
        string = "";
    }
    else if (e.target.innerHTML == "AC"){
        string = "";
        input.value = string;
    }
    else if(e.target.innerHTML == "DEL"){
        string = string.substring(0, string.length-1);
        input.value = string;
    }
    else{
        string += e.target.innerHTML;
        input.value = string;
        console.log("inputvalue", input.value)
    }
})
});

// var x = prompt("Where does the Pope live?");
// //  if (x === "Vatican" ) {
// //  alert("Correct!");
// //  }
// //  else {
// //  alert("Wrong answer");
// //  }


// // alert("sss");

// var correctAnswer = "Vatican";
//  if (x === correctAnswer) {
//  alert("Correct!");
//  }
//  else {
//  score = 22;
//  userIQ = "problematic";
//  alert("Incorrect");
//  }