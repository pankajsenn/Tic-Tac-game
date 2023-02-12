let container = document.getElementById("container")
let currentplayer = true;
let clickedvalues = [];
function clickhandler(value){
 if(clickedvalues.includes(value)){
 }else{
    clickedvalues.push(value);
    let box = document.getElementById(value);
    if(currentplayer){
        box.innerHTML = "X";
        document.getElementById("turn").innerText = "O's turn";
        currentplayer = false;
        Wincheck();
    }
    
    else{
        box.innerHTML = "O";
        document.getElementById("turn").innerText = `X's Turn`
        currentplayer=true;
        Wincheck();
    }
 }
}

function Wincheck(){
    const WinCondition = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7],
    ]
    WinCondition.forEach(e=>{
    if((document.getElementById(e[0]).innerText === document.getElementById(e[1]).innerText)&&(document.getElementById(e[2]).innerText === document.getElementById(e[1]).innerText)&& (document.getElementById(e[0]).innerText !== "")){
       document.getElementById("display-div").innerHTML = `<div id="result">${document.getElementById(e[0]).innerText} Won the Game</div>`
    }
    else if(clickedvalues.length >=9){
        document.getElementById("display-div").innerHTML = `<div id="result">Match Draw</div>`
    }
    })
}