let homescore = 0;
let guestscore = 0;

let homeEl = document.getElementById("home-box");
let guestEl = document.getElementById("guest-box");

//HOME FUNCTIONS
//+1 function
function homeAddOne() {
    let result = homescore+=1;
    homeEl.textContent = result;
      
}

//+2 function
function homeAddTwo() {
    let result = homescore+=2;
    homeEl.textContent = result;
}

function homeAddThree() {
    let result = homescore+=3;
    homeEl.textContent = result;
}


//GUEST FUNCTIONS
//+1 function
function guestAddOne() {
    let result = guestscore+=1;
    guestEl.textContent = result;
      
}

//+2 function
function guestAddTwo() {
    let result = guestscore+=2;
    guestEl.textContent = result;
}

function guestAddThree() {
    let result = guestscore+=3;
    guestEl.textContent = result;
}




//+3 function