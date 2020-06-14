document.querySelector('#clima').addEventListener('click', function() {
    obtenerDatos();
});

function obtenerDatos() {
    const datosTiempo = document.getElementById('tiempo').value;
    console.log(datosTiempo);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${datosTiempo}&APPID=1717aa5c5c1bc19e9722bdf913bb0f7b`

    fetch(url)
    .then(response => response.json() )
    .then(data => {
        
        let nombre = document.getElementById('contenido')
        nombre.innerHTML = `Weather in ${data.name}, ${data.sys.country} - ${data.weather[0].description}`

        let hum = document.getElementById('humedad')
        hum.innerHTML = `Humedad: ${data.main.humidity} %`

        let pres = document.getElementById('presion')
        pres.innerHTML = `Presión: ${data.main.pressure} hpa`

        let aman = document.getElementById('amanecer')
        aman.innerHTML = `Sunrise: ${data.sys.sunrise}`

        let pue = document.getElementById('puesta')
        pue.innerHTML = `Sunset: ${data.sys.sunset}`

        let lati = document.getElementById('latitud')   
        lati.innerHTML = `Latitud: ${data.coord.lat}`
        
        let long = document.getElementById('longitud')
        long.innerHTML = `Longitud: ${data.coord.lon}`

        console.log(data)
    })


}    