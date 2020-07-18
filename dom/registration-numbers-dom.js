const regButton = document.querySelector(".regButton");
const typingPlace = document.querySelector(".texting");
const radioButtons = document.querySelector(".town");
const regOutcomes = document.querySelector(".regNumbersList");
const regFilterText = document.querySelector(".regFilterText ");

plates =[];
regButton.addEventListener('click', function(){
    const regElement  = document.createElement("li");
     var selectedTown = document.querySelector(".town:checked")
    // if (selectedTown === "Bellville") {
    //     return "CY" + typingPlace;
    // }
    // if (selectedTown === "Paarl") {
    //     return "CJ" + typingPlace;
    // }
    // if (selectedTown === "Cape Town") {
    //     return "CA" + typingPlace;
    // }

    let regValue = "CA 123-567";

    if (typingPlace.value) {
        regValue = typingPlace.value;
    }
     if (selectedTown === "Bellville") {
        return "CY" + typingPlace;
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

function showList(list){
regOutcomes.innerHTML = "";
	for (var i = 0; i < list.length; i++) {
			const currentList = list[i];
			const regElement = document.createElement("li");
			regElement.innerHTML = currentList;
			regOutcomes.appendChild(regElement);
		}

}


regFilterText.addEventListener("keyup", function () {

    const filteredList = filter(plates, regFilterText.value);
    showList(filteredList)
    
});