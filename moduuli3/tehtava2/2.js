const target = document.getElementById('target')

const eka = document.createElement('li')
eka.textContent ="first item"
const toka = document.createElement('li')
toka.textContent ="second item"
toka.classList.add('my-item')
const kolmas = document.createElement('li')
kolmas.textContent ="third item"

target.appendChild(eka)
target.appendChild(toka)
target.appendChild(kolmas)