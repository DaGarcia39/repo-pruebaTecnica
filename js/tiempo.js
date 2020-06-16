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

        let tempe = document.getElementById('temp')
        tempe.innerHTML = `${data.main.temp}°K`

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



function obtenerNoticias() {
    const datosNoticias = document.getElementById('noticias').value;
    console.log(datosNoticias);

    const url2 = `https://gnews.io/api/v3/search?q=${datosNoticias}&token=21061c84bdf39b4ff32452c8ed60f2bb`

    fetch(url2)
	    .then(response => response.json() )
	    .then(data => {
           let anuncio = document.getElementById('lugarNoticias')
           anuncio.innerHTML = `
                <p style="padding: 20px;"><b>Titulo: </b>${data.articles[0].title}</p>
                <button class="btn btn-success" style="float: right;"><a href="${data.articles[0].url}" style="text-decoration: none; color: white;" >Ver más</a></button>
                <cite>-Fecha de publicacion: ${data.articles[0].publishedAt} por <a href="${data.articles[0].source.url}">${data.articles[0].source.name}</a></cite>
                <br><br>
                <p style="padding: 20px;"><b>Titulo: </b>${data.articles[1].title}</p>
                <button class="btn btn-success" style="float: right;"><a href="${data.articles[1].url}" style="text-decoration: none; color: white;" >Ver más</a></button>
                <cite>-Fecha de publicacion: ${data.articles[1].publishedAt} por <a href="${data.articles[1].source.url}">${data.articles[1].source.name}</a></cite>
                <br><br>
                <p style="padding: 20px;"><b>Titulo: </b>${data.articles[2].title}</p>
                <button class="btn btn-success" style="float: right;"><a href="${data.articles[2].url}" style="text-decoration: none; color: white;" >Ver más</a></button>
                <cite>-Fecha de publicacion: ${data.articles[2].publishedAt} por <a href="${data.articles[2].source.url}">${data.articles[2].source.name}</a></cite>
                <br><br>
                <p style="padding: 20px;"><b>Titulo: </b>${data.articles[3].title}</p>
                <button class="btn btn-success" style="float: right;"><a href="${data.articles[3].url}" style="text-decoration: none; color: white;" >Ver más</a></button>
                <cite>-Fecha de publicacion: ${data.articles[3].publishedAt} por <a href="${data.articles[3].source.url}">${data.articles[3].source.name}</a></cite>
            `

    })
}