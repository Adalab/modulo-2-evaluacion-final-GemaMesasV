"use strict";

const inputSearch = document.querySelector(".js-inputSearch");
const inputSearchBtn = document.querySelector(".js-btnSearch");
const boxListFetch = document.querySelector(".js-boxListFetch");

function renderCoctail(coctailData) {
  const coctail = `<li class="card">
	    <article>
			<h3 class="card_title">${coctailData.strDrink}</h3>
			<img
	        class="card_img"
	        src=${coctailData.strDrinkThumb}
	        alt="Coctail"
	      />
	    </article>
	    </li>`;
  return coctail;
}
function renderCoctailList(coctailDataList) {
  boxListFetch.innerHTML = "";
  for (const coctailItem of coctailDataList) {
    boxListFetch.innerHTML += renderCoctail(coctailItem);
  }
}
inputSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch.value}`
  )
    .then((response) => response.json())
    .then((searchInfo) => {
      const coctailDataList = searchInfo.drinks;
      renderCoctailList(coctailDataList);
    });
});
