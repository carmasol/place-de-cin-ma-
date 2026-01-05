
// Quand la page HTML est complétement chargée
document.addEventListener('DOMContentLoaded', function () { 

    //trouve tous les éléments avec la classe '.seat'
    const seats = document.querySelectorAll('.seat');

    //selectionne l'éléments avec l'id 'selected-seats'
    const selectedSeats = document.getElementById('selected-seats');

    //selectionne l'élément avec l'id 'status-message
    const statusMessage = document.getElementById('status-message');

    //selectionne l'élément avec l'id 'btn-reserve,
    const reserveButton = document.getElementById('btn-reserve');

    //initialiser une variable pour compter les siéges
    let selectedSeatCount = 0;

    //compte le nombre de siéges sélectionner
    function updateSelectedSetCount() {
        selectedSeats.innerText = `Places sélectionnées: ${selectedSeatCount}`;
    }

    //ajoute un écouteur à chaque click sur un siége
    function seatClickHandler() {

        //si le siéges est déja sélectionner 
        if (this.classList.contains('selected')) {
            this.classList.remove('selected')
            selectedSeatCount--;

            //le siége n'est pas sélectionner
        } else {
            this.classList.add('selected')
            selectedSeatCount++;
        }
        updateSelectedSetCount();
    }

    //écoute chaque élément seats précis de la liste  
    seats.forEach(function (seat) {
        seat.addEventListener('click', seatClickHandler)
    });

    //la logique pour enregistrer les places 
    function reserveSeats() {
        if (selectedSeatCount > 0) {
            statusMessage.innerText = "Places réservées"
            statusMessage.style.color = "green";

            //
        } else {
            statusMessage.innerText = "Sélectionner au moins une place"
            statusMessage.style.color = "red";
        }
    }

    reserveButton.addEventListener('click', reserveSeats)

})