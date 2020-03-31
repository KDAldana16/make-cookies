

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
  cookieCounter.innerHTML = cookieCount;
  refreshCookieCount()
})


// refresh cookies
let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}


/********CLICK POWER************/

// declare default variables
let clickPower = 5;
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
    clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

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
let grandmaPriceAmount = 100;
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

// game loop
let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}

/********FACILITIES************/

// set default values
let facilityAuto = false;
let facilityPower = 100;
let facilityPriceAmount = 150;
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

/********CHRISTMAS************/

// set default values
let christmasAuto = false;
let christmasPower = 150;
let christmasPriceAmount = 200;
let christmasLevelNumber = 0;

// declare DOM variables
let buyChristmas = document.getElementById('buy-christmas');
let christmasPrice = document.getElementById('christmas-price');
let christmasLevel = document.getElementById('christmas-level');
let christmasMultiple = document.getElementById('christmas-multiple');

// buy a christmas
buyChristmas.addEventListener("click", function() {
  // set autoLoop to false
  christmasAuto = false;

  // make sure we have enough cookies
  if (cookieCount >= christmasPriceAmount) {
    cookieCount -= christmasPriceAmount;
    refreshCookieCount()

  // upgrade power level
  christmasLevelNumber += 1;

  // update price
  christmasPriceAmount = Math.floor(christmasPriceAmount * 1.33);

  // update christmas power
  christmasPower += 600 + Math.floor(christmasLevelNumber * 1.33);;

  // turn autoFacility on!
  christmasAuto = true
  autoChristmasStart();

  // refresh shop item
  refreshChristmas();
  }
})

// game loop
let autoChristmasStart = function() {
  let christmasInt = window.setInterval(function() {
    cookieCount += christmasPower;
    refreshCookieCount();
  }, 1000);
}

// refresh shop
let refreshChristmas = function() {
  christmasLevel.innerHTML = christmasLevelNumber
  christmasPrice.innerHTML = christmasPriceAmount;
  christmasMultiple.innerHTML = christmasPower - 600;
}

/********VALENTINE'S DAY************/

// set default values
let valentinesAuto = false;
let valentinesPower = 200;
let valentinesPriceAmount = 250;
let valentinesLevelNumber = 0;

// declare DOM variables
let buyValentines = document.getElementById('buy-valentines');
let valentinesPrice = document.getElementById('valentines-price');
let valentinesLevel = document.getElementById('valentines-level');
let valentinesMultiple = document.getElementById('valentines-multiple');

// buy a valentines
buyValentines.addEventListener("click", function() {
  // set autoLoop to false
  valentinesAuto = false;

  // make sure we have enough cookies
  if (cookieCount >= valentinesPriceAmount) {
    cookieCount -= valentinesPriceAmount;
    refreshCookieCount()

  // upgrade power level
  valentinesLevelNumber += 1;

  // update price
  valentinesPriceAmount = Math.floor(valentinesPriceAmount * 1.33);

  // update valentines power
  valentinesPower += 600 + Math.floor(valentinesLevelNumber * 1.33);;

  // turn autoValentines on!
  valentinesAuto = true
  autoValentinesStart();

  // refresh shop item
  refreshValentines();
  }
})

// game loop
let autoValentinesStart = function() {
  let valentinesInt = window.setInterval(function() {
    cookieCount += valentinesPower;
    refreshCookieCount();
  }, 1000);
}

// refresh shop
let refreshValentines = function() {
  valentinesLevel.innerHTML = valentinesLevelNumber
  valentinesPrice.innerHTML = valentinesPriceAmount;
  valentinesMultiple.innerHTML = valentinesPower - 600;
}


/********BIRTHDAY************/

// set default values
let birthdayAuto = false;
let birthdayPower = 250;
let birthdayPriceAmount = 300;
let birthdayLevelNumber = 0;

// declare DOM variables
let buyBirthday = document.getElementById('buy-birthday');
let birthdayPrice = document.getElementById('birthday-price');
let birthdayLevel = document.getElementById('birthday-level');
let birthdayMultiple = document.getElementById('birthday-multiple');

// buy a birthday
buyBirthday.addEventListener("click", function() {
  // set autoLoop to false
  birthdayAuto = true;

  // make sure we have enough cookies
  if (cookieCount >= birthdayPriceAmount) {
    cookieCount -= birthdayPriceAmount;
    refreshCookieCount()

  // upgrade power level
  birthdayLevelNumber += 1;

  // update price
  birthdayPriceAmount = Math.floor(birthdayPriceAmount * 1.33);

  // update birthday power
  birthdayPower += 600 + Math.floor(birthdayLevelNumber * 1.33);;

  // turn autoBirthday on!
  birthdayAuto = true
  autoBirthdayStart();

  // refresh shop item
  refreshBirthday();
  }
})

// game loop
let autoBirthdayStart = function() {
  let birthdayInt = window.setInterval(function() {
    cookieCount += birthdayPower;
    refreshCookieCount();
  }, 1000);
}

// refresh shop
let refreshBirthday = function() {
  birthdayLevel.innerHTML = birthdayLevelNumber
  birthdayPrice.innerHTML = birthdayPriceAmount;
  birthdayMultiple.innerHTML = birthdayPower - 600;
}


/**********STOP THE GAME LOOP ***************/
ig.system.startRunLoop() and ig.system.stopRunLoop().
