var mymap = L.map("mapid").setView([41.387, 2.17], 17);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 10,
    maxZoom: 20,
    id: "mapbox/streets-v11",
    accessToken:
      "pk.eyJ1IjoibmFzdHktbiIsImEiOiJjazZieThodjUxMzE1M2Vwa2M5NmIwZ3Z3In0.SPhsbJJ_ecgG7Zozi61ClA"
  }
).addTo(mymap);

var marker;

mymap.on("click", function(e) {
  if (marker) {
    mymap.removeLayer(marker);
  }

  let location = [e.latlng.lat, e.latlng.lng];

  marker = new L.marker(location);
  mymap.addLayer(marker);
  marker
    .bindPopup(
      "Mis coordenadas son:<br> <b>Lat: " +
        location[0] +
        " Lng: " +
        location[1] +
        "</b>"
    )
    .openPopup()
    .addTo(mymap);

  mymap.setView(location, 19);
});
