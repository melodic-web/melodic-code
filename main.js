// contenedor lateral
const navbarLateral = document.getElementById("navbarLateral");
// Boton de accion abrir y cerrar menu
const headerToggle = document.getElementById("headerToggle");
// Contenernos lateral de la lista de albumes
const navbarAlbumesLateral = document.getElementById("albumesLateral");
// Boton de accion abrir y cerrar contenedor
const headerAlbumesToggle = document.getElementById("toggleAlbumesLateral");
//Contenedor de la lista de canciones
const songsContent = document.getElementById('songsContent');
//Contenedor de la lista de caciones favoritas
const favoritesContent = document.getElementById('favoritesContent');
//Contenedor de la lista de albumes
const albumesContent = document.getElementById('albumesContent');
//Contenedor de la informacion y canciones de un album
const albumDataContent = document.getElementById('albumDataContent');
//Boton para la navegacion al inicio
const navHome = document.getElementById('navHome');
//Boton para la navegacion a favoritos
const navFavoritos = document.getElementById('navFavoritos');
//Boton para activar la opcion de aleatorio
const ramdonAction = document.getElementById('ramdonAction');
//Boton para activar la opcion de repetir
const repeatAction = document.getElementById('repeatAction');
//Span para el nombre de la cancion en el reproductor
const songNameElement = document.getElementById('songName');
//Span para el nombre del artista en el reproductor
const artistNameSongElement = document.getElementById('artistNameSong');
//Contenedor de la imagen de la cancion en el reproductor
const imgPlayerElement = document.getElementById('imgPlayer');
//Boton de marca como favorito
const favoriteElement = document.getElementById('favorite');

//Abrir o cerrar menu lateral de navegacion
headerToggle.addEventListener("click", function () {
    navbarLateral.classList.toggle("open-lateral");
    headerToggle.classList.toggle('open-lateral');

    const listItems = document.getElementsByClassName('navbar-lateral-list-item');
    for (const item of listItems) {
        item.classList.toggle("open-lateral");
    }

    const itemsText = document.getElementsByClassName('item-text');
    for (const item of itemsText) {
        item.classList.toggle("open-lateral");
    }
});

// Abrir o cerra menu lateral de albumes
headerAlbumesToggle.addEventListener("click", function () {
    navbarAlbumesLateral.classList.toggle("expande");
    headerAlbumesToggle.classList.toggle('expande');
    document.getElementById('listAlbumes').classList.toggle('expande');

    const listItems = document.getElementsByClassName('info-album-container');
    for (const item of listItems) {
        item.classList.toggle("expande");
    }

    const itemsText = document.getElementsByClassName('header-text');
    for (const item of itemsText) {
        item.classList.toggle("expande");
    }

});

//Activar los contenedores de la pestaña de inicio
navHome.addEventListener('click', () => {
    songsContent.classList.add('show-content');
    albumesContent.classList.add('show-content');
    favoritesContent.classList.remove('show-content');
    albumDataContent.classList.remove('show-content');
})

//Activar el contenedor de la pestaña de favoritos
navFavoritos.addEventListener('click', () => {
    songsContent.classList.remove('show-content');
    albumesContent.classList.remove('show-content');
    favoritesContent.classList.add('show-content');
    albumDataContent.classList.remove('show-content');
})

//Activar o desactivar la funcion de ramdon
ramdonAction.addEventListener('click', () => {
    ramdonAction.querySelector('svg').classList.toggle('activate-action');
})

//Activar o desactivar la funcion de repetir
repeatAction.addEventListener('click', () => {
    repeatAction.querySelector('svg').classList.toggle('activate-action');
})

//Funcion de reproducir un album en especifico
function playAlbum(e) {
    songsContent.classList.remove('show-content');
    favoritesContent.classList.remove('show-content');
    albumesContent.classList.remove('show-content');
    albumDataContent.classList.add('show-content');

    const parentAnchor = e.closest('.item-album');
    const albumName = parentAnchor.querySelector('.info-list-album--container span:first-child').innerText;
    const artistName = parentAnchor.querySelector('.info-list-album--container span:last-child').innerText;
    const imgSrc = parentAnchor.querySelector('.portada-album').getAttribute('src');


    const albumNameElement = document.getElementById('albumName');
    const artistNameElement = document.getElementById('artistName');
    const albumPortadaElement = document.getElementById('albumPortada');

    albumNameElement.innerText = albumName;
    artistNameElement.innerText = artistName;
    albumPortadaElement.setAttribute('src', imgSrc);
}

//Funcion para reproduccir un album lateral
function playAlbumLateral(parentAnchor) {
    songsContent.classList.remove('show-content');
    favoritesContent.classList.remove('show-content');
    albumesContent.classList.remove('show-content');
    albumDataContent.classList.add('show-content');

    const albumName = parentAnchor.querySelector('.info-album-container span:first-child').innerText;
    const artistName = parentAnchor.querySelector('.info-album-container span:last-child').innerText;
    const imgSrc = parentAnchor.querySelector('.portada-album-mini').getAttribute('src');

    const albumNameElement = document.getElementById('albumName');
    const artistNameElement = document.getElementById('artistName');
    const albumPortadaElement = document.getElementById('albumPortada');

    albumNameElement.innerText = albumName;
    artistNameElement.innerText = artistName;
    albumPortadaElement.setAttribute('src', imgSrc);
}
//Funcion para reproducir album sin abrir el contenedor
function playAlbumLateralPlay(e) {
    const parentAnchor = e.closest('.album-lateral-list-item');
    playAlbumLateral(parentAnchor)
}

//Funcion para darle play a una cancion
function playSong(e) {
    const parentAnchor = e.closest('.item-song');

    const songName = parentAnchor.querySelector('.info-song-container span:first-child').innerText;
    const artistName = parentAnchor.querySelector('.info-song-container span:last-child').innerText;
    const imgSrc = parentAnchor.querySelector('.portada-song-mini').getAttribute('src');

    songNameElement.innerText = songName;
    artistNameSongElement.innerText = artistName;
    imgPlayerElement.setAttribute('src', imgSrc);
    favoriteElement.setAttribute('src', './img/favorite-uncheck-icon.svg');
}

//funcion para ponerle play a una cancion favorita
function playSongFavorite(e) {
    const parentAnchor = e.closest('.item-song');

    const songName = parentAnchor.querySelector('.info-song-container span:first-child').innerText;
    const artistName = parentAnchor.querySelector('.info-song-container span:last-child').innerText;
    const imgSrc = parentAnchor.querySelector('.portada-song-mini').getAttribute('src');

    songNameElement.innerText = songName;
    artistNameSongElement.innerText = artistName;
    imgPlayerElement.setAttribute('src', imgSrc);
    favoriteElement.setAttribute('src', './img/favorite-icon.svg');
}

// Cambiar la duracion de la cancion
function changeDuration(duration) {
    const totalDuration = document.getElementById('totalDuration');
    totalDuration.innerText = duration;
}

// Pasar a al siguiente cancion
function nextTrack() {
    songNameElement.innerText = "Nombre Cancion 11";
    imgPlayerElement.setAttribute('src', './img/imagen-song-11.png');
    changeDuration("04:11");
}

//Volver a la cancion anterior
function beforeTrack() {
    songNameElement.innerText = "Nombre cancion";
    imgPlayerElement.setAttribute('src', 'img/imagen-player-1.png');
    changeDuration("03:48");
}

// Pausar o despusar la cancion actual del reproductor
function playPause(button) {
    const img = button.querySelector('img');
    if (img.src.includes('pause-icon.svg')) {
        img.setAttribute('src', 'img/play-icon.svg');
    } else {
        img.setAttribute('src', 'img/pause-icon.svg');
    }
}

// Marca una cancion como favorita
function favoriteCheck(button) {
    if (button.src.includes('favorite-uncheck-icon.svg')) {
        favoriteElement.setAttribute('src', './img/favorite-icon.svg');
    } else {
        favoriteElement.setAttribute('src', './img/favorite-uncheck-icon.svg');
    }
}