const regButton = document.querySelector(".regButton");
const texting = document.querySelector(".texting");
const radioButtons = document.querySelector(".town");
const regOutcomes = document.querySelector(".regNumbersList");
const regFilterText = document.querySelector(".regFilterText");
const filBtn = document.querySelector(".filBtn");


var registerNumberInstance = Registering();



regButton.addEventListener('click', function () {
    const regElement = document.createElement("li");

    let regValue = "CA 123-567";
    const typer = texting.value;
    var typingPlace = typer.toUpperCase();
if(plates.includes(typingPlace.value)) {
return alert("andizi!!!")
}
    if (typingPlace) {
        regValue = typingPlace;
    }

    plates.push(regValue);
    regElement.innerHTML = regValue;
    regOutcomes.appendChild(regElement)
    showList(plates)


})

function filter(list, value) {
    const filteredList = [];
    for (var i = 0; i < list.length; i++) {
        const currentList = list[i];
        if (currentList.indexOf(value) !== -1) {
            filteredList.push(currentList)
        }
    }
    return filteredList
}

function showList(list) {
    regOutcomes.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        const currentList = list[i];
        const regElement = document.createElement("li");
        regElement.innerHTML = currentList;
        regOutcomes.appendChild(regElement);
    }

}

filBtn.addEventListener("click", function () {
    const filteredList = filter(plates, regFilterText.value);
    showList(filteredList)

    const selectedTown = document.querySelector(".towns")
    let currentTown = regFilterText;
    if (selectedTown) {
        currentTown = selectedTown.value;
    }

})

// regFilterText.addEventListener("keyup", function () {

//     const filteredList = filter(plates, regFilterText.value);
//     showList(filteredList)

// });