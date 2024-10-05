
let num1 = document.querySelectorAll(".num")[0] ;
let num2 = document.querySelectorAll(".num")[1] ;
let ans1 = document.getElementById('ans1') ;
let ans2 = document.getElementById('ans2') ;

let p = document.getElementById('p') ;
let r = document.getElementById('r') ;
let t = document.getElementById('t') ;

async function sum(){
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);

    // const response = await fetch("http://localhost:3005/sum?n1=" + a + "&n2=" + b) ;
    // console.log(response);
    // const ans = await response.text() ;
    // console.log(ans);
    // ans1.innerHTML =  ans ;


    fetch("http://localhost:3005/sum?n1=" + a + "&n2=" + b)
    .then(function(response){
        return response.text()
    })
    .then(function(ans){
        console.log(ans)
        ans1.innerHTML = ans ;
    })
}
// impleInterest
async function simpleInterest(){
    let pri = parseInt(p.value);
    let rate = parseInt(r.value);
    let time = parseInt(t.value);
    console.log(pri, rate , time) ;

    // const response = await fetch("http://localhost:3005/simpleinterest?p="+pri + "&r="+ rate + "&t="+ time) ;
    // const ans = await response.text() ;
    fetch("http://localhost:3005/simpleInterest?p=1000&r=5&t=9")
    .then(function(response){
        response.text()
    .then(function(ans){
        console.log(ans)
        ans2.innerHTML = ans ;
    })
})
  
    
}

