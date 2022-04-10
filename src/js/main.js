"use strict";

// CONSTANTS FOR SEARCH SECTION
const inputSearch = document.querySelector(".js-inputSearch");
const inputSearchBtn = document.querySelector(".js-btnSearch");
const inputSearchForm = document.querySelector(".js-formSearch");
const boxListFetch = document.querySelector(".js-boxListFetch");
let coctailDataList = [];

//FUNCTIONS

const favouriteCoctails = [];
const boxListFavourites = document.querySelector(".js-boxListFavourites");

function renderFavouriteCoctails() {
    boxListFavourites.innerHTML = "";
for (const favouriteCoctailItem of favouriteCoctails) {
    boxListFavourites.innerHTML += renderCoctail(favouriteCoctailItem);
  }
}


function alternativeImage(url) {
  if (url === "") {
    return "https://via.placeholder.com/120x120/ffffff/666666/?text=drink";
  } else {
    return url;
  }
}

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


function renderCoctailList(coctailDataList) {
  boxListFetch.innerHTML = "";
  for (const coctailItem of coctailDataList) {
    boxListFetch.innerHTML += renderCoctail(coctailItem);
  }

  const allDrinks = document.querySelectorAll('.drink');
  for (const drink of allDrinks) {

    drink.addEventListener("click", addDrinkToFavourite);
  }
}

function addDrinkToFavourite(event) {
  event.preventDefault();
  const drinkId = event.currentTarget.id;
  const selectedDrink = coctailDataList.find((element) => element.idDrink === drinkId);
  favouriteCoctails.push(selectedDrink);
  renderFavouriteCoctails();
}

// const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
// const longName = names.find((name) => name.length > 5);

function fetchAndRender() {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch.value}`
  )
    .then((response) => response.json())
    .then((searchInfo) => {
      coctailDataList = searchInfo.drinks;
      renderCoctailList(coctailDataList);
    });
}
// END OF FUNCTIONS

inputSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetchAndRender();
});

inputSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchAndRender();
});