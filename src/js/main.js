"use strict";

// GLOBAL CONSTANTS
const inputSearch = document.querySelector(".js-inputSearch");
const inputSearchBtn = document.querySelector(".js-btnSearch");
const inputSearchForm = document.querySelector(".js-formSearch");
const boxListFetch = document.querySelector(".js-boxListFetch");
const boxListFavourites = document.querySelector(".js-boxListFavourites");
const deleteList = document.querySelector(".js-deleteList");
const resetBtn = document.querySelector(".js-resetBtn");

//DRINKS ARRAYS
let coctailDataList = [];
const favouriteCoctails = JSON.parse(localStorage.getItem("favourites")) || [];

//FUNCTIONS

//SINGLE DRINK RENDERS
function renderCoctail(coctailData) {
  const coctail = `<li id=${coctailData.idDrink} class="drink">
              <h3 class="drink_title">${coctailData.strDrink}</h3>
              <img
              class="drink_img"
              src=${alternativeImage(coctailData.strDrinkThumb)}
              alt="Coctail"
            />
          </li>`;
  return coctail;
}
function renderCoctailFavourite(coctailData) {
  const coctail = `<li class="drink-fav">
              <div class="drink-fav_container"> <h3 class="drink-fav_title">${
                coctailData.strDrink
              }</h3>
              <button id=${
                coctailData.idDrink
              } class="delete-btn js-deleteBtn"> x </button> </div>
              <img
              class="drink-fav_img"
              src=${alternativeImage(coctailData.strDrinkThumb)}
              alt="Coctail"
            />
          </li>`;
  return coctail;
}

//DRINK LIST RENDERS
function renderCoctailList() {
  boxListFetch.innerHTML = "";
  for (const coctailItem of coctailDataList) {
    boxListFetch.innerHTML += renderCoctail(coctailItem);
  }

  const allDrinks = document.querySelectorAll(".drink");
  for (const drink of allDrinks) {
    drink.addEventListener("click", addDrinkToFavourite);
    if (isInFavourites(drink.id) !== -1) {
      drink.classList.add("favourite");
    }
  }
}

function renderFavouriteCoctails() {
  boxListFavourites.innerHTML = "";
  for (const favouriteCoctailItem of favouriteCoctails) {
    boxListFavourites.innerHTML += renderCoctailFavourite(favouriteCoctailItem);
  }
  const allDeleteBtn = document.querySelectorAll(".js-deleteBtn");
  for (const deleteBtn of allDeleteBtn) {
    deleteBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const drinkId = event.currentTarget.id;
      deleteFromFavouriteList(drinkId);
      renderCoctailList();
    });
  }
}

//FETCH API
function fetchAndRender() {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch.value}`
  )
    .then((response) => response.json())
    .then((searchInfo) => {
      coctailDataList = searchInfo.drinks;
      renderCoctailList();
    });
}

//DELETE FUNCTIONS
function deleteAllFavouriteList() {
  favouriteCoctails.splice(0, favouriteCoctails.length);
  localStorage.setItem("favourites", JSON.stringify(favouriteCoctails));
  renderFavouriteCoctails();
  renderCoctailList();
}

function deleteFromFavouriteList(drinkId) {
  const drinkIndex = favouriteCoctails.findIndex((element) => {
    return element.idDrink === drinkId;
  });
  favouriteCoctails.splice(drinkIndex, 1);
  localStorage.setItem("favourites", JSON.stringify(favouriteCoctails));
  renderFavouriteCoctails();
}

// UTILS FUNCTIONS
function resetList() {
  inputSearch.value = "";
  boxListFetch.innerHTML = "";
  coctailDataList = [];
}

function alternativeImage(url) {
  if (url === "") {
    return "https://via.placeholder.com/120x120/ffffff/666666/?text=drink";
  } else {
    return url;
  }
}

function isInFavourites(drinkId) {
  return favouriteCoctails.findIndex((element) => {
    return element.idDrink === drinkId;
  });
}

function addDrinkToFavourite(event) {
  event.preventDefault();
  const drinkId = event.currentTarget.id;
  if (isInFavourites(drinkId) === -1) {
    const selectedDrink = coctailDataList.find(
      (element) => element.idDrink === drinkId
    );
    favouriteCoctails.push(selectedDrink);
    event.currentTarget.classList.add("favourite");
    localStorage.setItem("favourites", JSON.stringify(favouriteCoctails));
    renderFavouriteCoctails();
  } else {
    deleteFromFavouriteList(drinkId);
    event.currentTarget.classList.remove("favourite");
    renderCoctailList();
  }
}

// END OF FUNCTIONS

//INITIALIZATION
renderFavouriteCoctails();

//LISTENERS
inputSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetchAndRender();
});

inputSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchAndRender();
});

deleteList.addEventListener("click", (event) => {
  event.preventDefault();
  deleteAllFavouriteList();
});

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  resetList();
});
