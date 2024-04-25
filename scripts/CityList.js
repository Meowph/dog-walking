import { getWalkers } from "./database.js"


const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const cityTarget = clickEvent.target
        window.alert(`${cityTarget.dataset.walkername} is servicing this city`)
    }
)


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const currentWalker of walkers) {
        citiesHTML += `<li data-walkername = "${currentWalker.name}">
        ${currentWalker.city}
        </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

