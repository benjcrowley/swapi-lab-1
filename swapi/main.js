const getResidentsBtn = document.querySelector('button')
const charContainer = document.querySelector('div')


function getResidents () {
    event.preventDefault()
    // console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((response) => {
        // console.log(response.data.results[0].residents)
        for (let i= 0; i < response.data.results[0].residents.length; i++){
            axios.get(response.data.results[0].residents[i])
            .then((response) => {
                // console.log(response.data.name)
                createname(response.data)
            })
        }
    })

}
function createname (char){

    let charCard = document.createElement('h2')
    charCard.innerHTML = char.name
    charContainer.appendChild(charCard)

}

getResidentsBtn.addEventListener('click', getResidents)