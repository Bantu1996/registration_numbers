function Registering() {
    plates =[];

    function regTownNumbers(town, typingPlace) {
       
        if (town === "Bellville") {
            return "CY " + typingPlace;
        }
        if (town === "Paarl") {
            return "CJ" + typingPlace;
        }
        if (town === "Cape Town") {
            return "CA" + typingPlace;
        }
       
    }
    
    return {
        regTownNumbers
    }
}