// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly

function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let $patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    $patty.style.display = "inherit";
  } else {
    $patty.style.display = "none";
  }
}

function renderCheese() {
  let $cheese = document.querySelector("#cheese");
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  if (state.Cheese) {
    $cheese.style.display = "inherit";
  } else {
    $cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
}

document.querySelector(".btn-patty").onclick = function() {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function() {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-cheese").onclick = function() {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button

// Trial 2 - Setup event listener for the lettuce button

//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons() {
  //Solution
  document.querySelectorAll(".button").forEach($element => {
    state[$element.textContent]
      ? $element.classList.add("active")
      : $element.classList.remove("active");
  });
}
//Challenge 2
// Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard() {
  //Solution
  document.querySelectorAll(".items").forEach($element => {
    state[$element.textContent]
      ? ($element.style.display = "inherit")
      : ($element.style.display = "none");
  });
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  let price = 20;
  for (let key in ingredients) {
    if (state[key]) {
      price += ingredients[key];
    }
  }
  let $pricetext = document.querySelector(".price-details");
  $pricetext.textContent = "INR " + price;
}
