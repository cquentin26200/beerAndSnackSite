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

for (let i = 0; i < activeMenu.length; i++) {
    activeMenu[i].addEventListener("click", () => {
        if (activeMenu[i].parentElement.children[1].classList.contains("none")) {
            activeMenu[i].parentElement.children[1].classList.replace("none", ["block"]);
            activeMenu[i].parentElement.children[0].children[0].classList.replace("fa-angle-down", ["fa-angle-up"]);
        } else {
            activeMenu[i].parentElement.children[1].classList.replace("block", ["none"]);
            activeMenu[i].parentElement.children[0].children[0].classList.replace("fa-angle-up", ["fa-angle-down"]);
        }
    })
}

console.log(document.body.parentNode.parentNode)

