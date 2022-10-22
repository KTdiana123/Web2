// consumir datos del api de spotify

// 1. uri= url+ep

const URI = "https://api.spotify.com/v1/artists/250b0Wlc5Vk0CoUsaCY84M/top-tracks?market=US"

// 2. TOKEN

const TOKEN = "Bearer BQCqvgU0L2vCTx33QB5NRGh86CV8LyW8eH3rwLBMLknDKR9ueE7M31xE3Je1BMOLEvRFqqb4gpVSDmrKBInnK_5pG1PWuK8YPjUCyWPVIZAAmdXXjDf7OzGhhElrBy5cn43QlHriLcQdud1_Pe8Jgx-he6fsI2g_5OSU1Vw_40sNFjCDlnQjG_e2A_V13Ng"

//peticion

const PETICION = {
    method: "GET",
    headers: { Authorization: TOKEN },

}

let fila = document.getElementById("fila")

// USAMOS LA PROESA fetch para consumir api

fetch(URI, PETICION)
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (respuesta) {
        let canciones = respuesta.tracks
        canciones.forEach(function (cancion) {
            console.log(cancion.name)
            console.log(cancion.preview_url)

            let columna = document.createElement("div")
            columna.classList.add("col")

            let tarjeta = document.createElement("div")
            tarjeta.classList.add("card", "h-100")

            let audio = document.createElement("audio")
            audio.setAttribute("controls", "controls")
            audio.src = cancion.preview_url

            let nombre=document.createElement("h1")
            nombre.classList.add("text-center")
            nombre.textContent=cancion.name

            tarjeta.appendChild(nombre)
            tarjeta.appendChild(audio)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)

        })
    })
    .catch(function (error) {
        console.log(error)
    })