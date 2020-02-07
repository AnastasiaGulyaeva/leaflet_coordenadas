var mymap = L.map("mapid").setView([41.387, 2.17], 17);
var marker = L.marker([41.386816, 2.1661084]).addTo(mymap);
marker
  .bindPopup(
    "<b>Restaurant Centfocs</b><br><br>Restaurante mediterráneo.<br>Carrer de Balmes, 16, 08007 Barcelona"
  )
  .openPopup();

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken:
      "pk.eyJ1IjoibmFzdHktbiIsImEiOiJjazZieThodjUxMzE1M2Vwa2M5NmIwZ3Z3In0.SPhsbJJ_ecgG7Zozi61ClA"
  }
).addTo(mymap);
