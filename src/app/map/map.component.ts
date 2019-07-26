import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import { Countries } from '../countries';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

@Output() notify =  new EventEmitter();
input : string = "";
map : any;
markers : any[] = [];
queries : string[] = [];

icone : any = L.icon({
    iconUrl : 'assets/images/marker-icon.png',
    shadowUrl: 'assets/images//marker-shadow.png',

    iconSize:     [25, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  constructor() {
  }

  ngOnInit() {
    this.map = L.map('map').setView([47.931882, 4.746096], 5);
    L.tileLayer(/*'http://{s}.tile.osm.org/{z}/{x}/{y}.png'*/'http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 17,
        minZoom: 0
      }).addTo(this.map);

        //console.log(Countries);

      this.map.on('click',(location)=>{
        L.popup().setLatLng(location.latlng).setContent('you clicked at' + location.latlng.toString()).addTo(this.map);
      this.map.panTo(location.latlng);

      });

  }
  detectCountry(input)
  {
    for ( let i = 0 ; i < this.markers.length;i++)
      this.map.removeLayer(this.markers[i]);
      this.markers = [];
      this.queries = [];
    for ( let country of Countries){
      let contains : boolean = true;
      if ( input == '')
      return;
      for( let i = 0 ; i < input.length;i++){
      if ( country.country.toLowerCase()[i] != input[i].toLowerCase())
      {
        contains = false;
        break;
      }
}
if ( contains){
let marker =new L.marker([country.latitude, country.longitude],{icon : this.icone}).addTo(this.map).bindPopup("<b>Vous êtes en "+country.country+"</b>");

this.map.addLayer(marker);
this.markers.push(marker);
this.queries.push(country.country);
}
  }
  }

  redirect(query)
  {
    console.log(query);
    for ( let country of Countries)
    {
      if ( country.country == query.country){
        console.log(query);
        this.map.flyTo(country.latitude,country.longitude);
    }
  }
  }
}
