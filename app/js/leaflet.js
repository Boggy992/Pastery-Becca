if(document.querySelector('.map-sec') !== null){
    // default map layer
    let map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [44.53629025271332, 19.228325625291905],
        zoom: 14
    });

    let marker = L.marker([44.53629025271332, 19.228325625291905]).addTo(map);
}