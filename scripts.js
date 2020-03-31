

/********COOKIE CLICKER************/

// declare default variables
let cookieCount = 0;


// declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

cookieCounter.innerHTML = cookieCount;

// every time a user clicks the button, their cookies are increased by the value of their clickPower
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
})


let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}


/********CLICK POWER************/

// declare default variables
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

// declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//Buy click power
buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    // subtract cookies from the price of the item
    cookieCount -= clickPowerPriceAmount;
    refreshCookieCount()

    // update power level
    clickPowerLevelNumber += 1;

    // update click price
    clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

    // update Click Power
    clickpower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

    // refresh shop item
    refreshPowerClick();
  }
})

let refreshPowerClick = function() {
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerLevel.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple,innerHTML = clickPower;
}



/********GRANDMAS************/

// set default values
let grandmaAuto = false;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

// declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

// buy a grandma
buyGrandma.addEventListener("click", function() {

  // make sure we have enough and subtract our cookies from the price
  if (cookieCount >= grandmaPriceAmount) {
    // subtract cookies from the price of the item
    cookieCount += - grandmaPriceAmount;
    refreshCookieCount()
}
  // upgrade power level
  grandmaLevelNumber += 1;

  // update price
  grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);

  // update grandma power
  grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);

  // turn autoGrandma on!
  autoGrandma = true
  autoGrandmaStart();

  // refresh shop item
  refreshGrandma();

})

let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower - 10;
}

window.setInterval(function(){
  // executing code loop goes here
}, numberOfMilliSeconds)

let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}

/********FACILITIES************/

// set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

// declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

// buy a facility
buyFacility.addEventListener("click", function() {
  // set autoLoop to false
  facilityAuto = false;

  // make sure we have enough cookies
  if (cookieCount >= facilityPriceAmount) {
    cookieCount -= facilityPriceAmount;
    refreshCookieCount()

  // upgrade power level
  facilityLevelNumber += 1;

  // update price
  facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

  // update facility power
  facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;

  // turn autoFacility on!
  facilityAuto = true
  autoFacilityStart();

  // refresh shop item
  refreshFacility();
  }
})

// game loop
let autoFacilityStart = function() {
  let facilityInt = window.setInterval(function() {
    cookieCount += facilityPower;
    refreshCookieCount();
  }, 1000);
}
// refresh shop
let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}
