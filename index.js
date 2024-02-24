let myMap = L.map("map").setView([35.91056, -79.05021], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    // Attribution is obligatory as per copyright!
}).addTo(myMap);

let davisMarker = L.marker([35.91096146052036, -79.04826417699476]).addTo(myMap);
davisMarker.bindPopup("Davis Library");