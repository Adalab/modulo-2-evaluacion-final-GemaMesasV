"use strict";
function renderCoctail(coctailData) {
  const coctail = `<li class="card">
              <h3 class="card_title">${coctailData.strDrink}</h3>
              <img
              class="card_img"
              src=${coctailData.strDrinkThumb}
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
}

function fetchAndRender() {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch.value}`
  )
    .then((response) => response.json())
    .then((searchInfo) => {
      const coctailDataList = searchInfo.drinks;
      renderCoctailList(coctailDataList);
    });
}

inputSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetchAndRender();
});

inputSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchAndRender();
  });