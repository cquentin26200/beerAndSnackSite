/*async function getApi () {
    try {
        return {
            beer: fetch('https://api.sampleapis.com/beers/ale')
                .then(response => response.json())
                .then(data => data),
            food: fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Seafood')
                .then(response => response.json())
                .then(data => data)
        } 
    } catch (error) {
        console.log(error);
    }
}


async function useApi () {
    const api = await getApi();
    console.log(api)
}

useApi();*/

const menuBurgerHeader = document.querySelector(".menuBurgerHeader");

function showHideMenuBurgerHeader () {
    if (menuBurgerHeader.classList.contains("hideMenuBurgerHeader")) {
        menuBurgerHeader.classList.replace("hideMenuBurgerHeader", ["showMenuBurgerHeader"]);
    } else {
        menuBurgerHeader.classList.replace("showMenuBurgerHeader", ["hideMenuBurgerHeader"]);
    }
}

const activeMenuBurgerHeader = document.querySelector(".activeMenuBurgerHeader");

activeMenuBurgerHeader.addEventListener("click", showHideMenuBurgerHeader);

//show all menu

const activeMenu = document.querySelectorAll(".activeMenu");

for (let activeMenus of activeMenu) {
    activeMenus.addEventListener("click", () => {
        activeMenus.parentElement.children[1].classList.toggle("none");
        activeMenus.parentElement.children[0].children[0].classList.toggle("fa-angle-down");
        activeMenus.parentElement.children[0].children[0].classList.toggle("fa-angle-up");
    })
}
