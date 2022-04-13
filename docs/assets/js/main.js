"use strict";const inputSearch=document.querySelector(".js-inputSearch"),inputSearchBtn=document.querySelector(".js-btnSearch"),inputSearchForm=document.querySelector(".js-formSearch"),boxListFetch=document.querySelector(".js-boxListFetch"),boxListFavourites=document.querySelector(".js-boxListFavourites"),deleteList=document.querySelector(".js-deleteList"),resetBtn=document.querySelector(".js-resetBtn");let coctailDataList=[];const favouriteCoctails=JSON.parse(localStorage.getItem("favourites"))||[];function checkIfIsAlcoholic(t){return"Alcoholic"===t?"<p>¡ Cuidado! Tiene alcohol\n    </p>":"<p>No tiene alcohol\n  </p>"}function renderCoctail(t){return`<li id=${t.idDrink} class="drink">\n              <h3 class="drink_title">${t.strDrink}</h3>\n              <img\n              class="drink_img"\n              src=${alternativeImage(t.strDrinkThumb)}\n              alt="Coctail"\n            />\n            <p>${checkIfIsAlcoholic(t.strAlcoholic)}</p>\n          </li>`}function renderCoctailFavourite(t){return`<li id=${t.idDrink} class="drink-fav js-drinkFav">\n              <div class="drink-fav_container"> <h3 class="drink-fav_title">${t.strDrink}</h3>\n              <button id=${t.idDrink} class="delete-btn js-deleteBtn"> x </button> </div>\n              <img\n              class="drink-fav_img"\n              src=${alternativeImage(t.strDrinkThumb)}\n              alt="Coctail"\n            />\n          </li>`}function CheckFavName(t){const e=t.currentTarget.id,i=favouriteCoctails.find(t=>t.idDrink===e);console.log(i.strDrink)}function renderCoctailList(){boxListFetch.innerHTML="";for(const t of coctailDataList)boxListFetch.innerHTML+=renderCoctail(t);const t=document.querySelectorAll(".drink");for(const e of t)e.addEventListener("click",addDrinkToFavourite),-1!==isInFavourites(e.id)&&e.classList.add("favourite")}function renderFavouriteCoctails(){boxListFavourites.innerHTML="";for(const t of favouriteCoctails)boxListFavourites.innerHTML+=renderCoctailFavourite(t);const t=document.querySelectorAll(".js-deleteBtn");for(const e of t)e.addEventListener("click",t=>{t.preventDefault();deleteFromFavouriteList(t.currentTarget.id),renderCoctailList()});const e=document.querySelectorAll(".js-drinkFav");for(const t of e)t.addEventListener("click",CheckFavName)}function fetchAndRender(){fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+inputSearch.value).then(t=>t.json()).then(t=>{coctailDataList=t.drinks,renderCoctailList()})}function deleteAllFavouriteList(){favouriteCoctails.splice(0,favouriteCoctails.length),localStorage.setItem("favourites",JSON.stringify(favouriteCoctails)),renderFavouriteCoctails(),renderCoctailList()}function deleteFromFavouriteList(t){const e=favouriteCoctails.findIndex(e=>e.idDrink===t);favouriteCoctails.splice(e,1),localStorage.setItem("favourites",JSON.stringify(favouriteCoctails)),renderFavouriteCoctails()}function resetList(){inputSearch.value="",boxListFetch.innerHTML="",coctailDataList=[]}function alternativeImage(t){return""===t?"https://via.placeholder.com/120x120/ffffff/666666/?text=drink":t}function isInFavourites(t){return favouriteCoctails.findIndex(e=>e.idDrink===t)}function addDrinkToFavourite(t){t.preventDefault();const e=t.currentTarget.id;if(-1===isInFavourites(e)){const i=coctailDataList.find(t=>t.idDrink===e);favouriteCoctails.push(i),t.currentTarget.classList.add("favourite"),localStorage.setItem("favourites",JSON.stringify(favouriteCoctails)),renderFavouriteCoctails()}else deleteFromFavouriteList(e),t.currentTarget.classList.remove("favourite"),renderCoctailList()}renderFavouriteCoctails(),inputSearchBtn.addEventListener("click",t=>{t.preventDefault(),fetchAndRender()}),inputSearchForm.addEventListener("submit",t=>{t.preventDefault(),fetchAndRender()}),deleteList.addEventListener("click",t=>{t.preventDefault(),deleteAllFavouriteList()}),resetBtn.addEventListener("click",t=>{t.preventDefault(),resetList()});