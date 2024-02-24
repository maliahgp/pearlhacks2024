let myMap = L.map("map").setView([35.91056, -79.05021], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    // Attribution is obligatory as per copyright!
}).addTo(myMap);

// Libraries and Dining Halls

let davisMarker = L.marker([35.91096146052036, -79.04826417699476]).addTo(myMap);
davisMarker.bindPopup("Davis Library");

let sciLibraryMarker = L.marker([35.90589678566823, -79.05299136244936]).addTo(myMap);
sciLibraryMarker.bindPopup("Health Science Library");

let ulMarker = L.marker([35.909986015518356, -79.04899963360246]).addTo(myMap);
ulMarker.bindPopup("Undergraduate Library (UL)");

let infoAndSciLibraryMarker = L.marker([35.91141737414703, -79.04925099313589]).addTo(myMap);
infoAndSciLibraryMarker.bindPopup("Information and Library Science Library");

let sloaneLibraryMarker = L.marker([35.91096146052036, -79.04826417699476]).addTo(myMap);
sloaneLibraryMarker.bindPopup("Sloane Art Library");

let wilsonMarker = L.marker([35.909564818934626, -79.049759893136]).addTo(myMap);
let wilsonPopup = 
wilsonMarker.setContent('<a href="http://www.google.com">Visit Google</a>');

let lenoirMarker = L.marker([35.910651317144364, -79.0486821489566]).addTo(myMap);
lenoirMarker.bindPopup("Lenoir Dining Hall");

let chaseMarker = L.marker([35.90613666265691, -79.04537794155266]).addTo(myMap);
chaseMarker.bindPopup("Chase Dining Hall");

let stoneAndLeafMarker = L.marker([35.90999826683317, -79.04838713546424]).addTo(myMap);
stoneAndLeafMarker.bindPopup("Stone and Leaf Cafe");


// Recreation and Scenic Locations

let srcMarker = L.marker([35.909296299082385, -79.04748262195136]).addTo(myMap);
srcMarker.bindPopup("Student Recreation Center");

let ramsHeadMarker = L.marker([35.9058815625398, -79.04662956747978]).addTo(myMap);
ramsHeadMarker.bindPopup("Rams Head Recreation Center");

let hookerFieldsMarker = L.marker([35.909998788224755, -79.04414858390538]).addTo(myMap);
hookerFieldsMarker.bindPopup("Hooker Fields");

let battleParkMarker = L.marker([35.91426051496092, -79.04335753633688]).addTo(myMap);
battleParkMarker.bindPopup("Battle Park");

let bowmanPoolMarker = L.marker([35.90979899313018, -79.04597900730927]).addTo(myMap);
bowmanPoolMarker.bindPopup("Bowman Pool");

let quadMarker = L.marker([35.910462690036326, -79.05029899634333]).addTo(myMap);
quadMarker.bindPopup("The Quad");

let wellMarker = L.marker([35.912105024138896, -79.05123576800901]).addTo(myMap);
wellMarker.bindPopup("The Old Well");

let bellMarker = L.marker([35.90865460068994, -79.04926678427593]).addTo(myMap);
bellMarker.bindPopup("The Bell Tower");

let arboretumMarker = L.marker([35.91375600533656, -79.04899805091243]).addTo(myMap);
arboretumMarkerMarker.bindPopup("Coker Arboretum");


// Dorms
let cobbMarker = L.marker([35.91239937209401, -79.04474736037054]).addTo(myMap);
cobbMarker.bindPopup("Cobb Residence Hall");

let craigMarker = L.marker([35.902923463376425, -79.04508724687871]).addTo(myMap);
craigMarker.bindPopup("Craig Residence Hall");

let ehouseMarker = L.marker([35.904557202324966, -79.04289856463247]).addTo(myMap);
ehouseMarker.bindPopup("E-House Residence Hall");

let everettMarker = L.marker([35.9127565290404, -79.04642877756542]).addTo(myMap);
everettMarker.bindPopup("Everett Residence Hall");

let grahamMarker = L.marker([35.91326009588112, -79.04672343523725]).addTo(myMap);
grahamMarker.bindPopup("Graham Residence Hall");

let hintonjamesMarker = L.marker([35.90242431038135, -79.04335963523779]).addTo(myMap);
hintonjamesMarker.bindPopup("Hinton James Residence Hall");

let hortonMarker = L.marker([35.90342692853227, -79.04418010216595]).addTo(myMap);
hortonMarker.bindPopup("Horton Residence Hall");

let kouryMarker = L.marker([35.90369132860816, -79.04329654317604]).addTo(myMap);
kouryMarker.bindPopup("Koury Residence Hall");

let lewisMarker = L.marker([35.91249912465111, -79.04694620640129]).addTo(myMap);
lewisMarker.bindPopup("Lewis Residence Hall");

let mclintonMarker = L.marker([35.912917271012965, -79.04713253153463]).addTo(myMap);
mclintonMarker.bindPopup("McClinton Residence Hall");

let granvilleMarker = L.marker([35.9135382878546, -79.05705218754915]).addTo(myMap);
granvilleMarker.bindPopup("Granville Towers");