import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Countries } from '../countries';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

map : any;
icone : any = L.icon({
    iconUrl : '/assets/images/marker-icon.png',
    shadowUrl: '/assets/images//marker-shadow.png',

    iconSize:     [20, 40], // size of the icon
    shadowSize:   [30, 30], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  constructor() {
  }

  ngOnInit() {
    this.map = L.map('map').setView([48.854546, 2.347366], 5);
    // load a tile layer
    L.tileLayer(/*'http://{s}.tile.osm.org/{z}/{x}/{y}.png'*/'http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 17,
        minZoom: 0
      }).addTo(this.map);

        //console.log(Countries);
        for ( let country of Countries){
          L.marker([country.latitude, country.longitude],{icon : this.icone}).addTo(this.map).bindPopup("<b>Vous êtes en "+country.country+"</b>").openPopup();;
      }
      this.map.on('click',this.onclick);

  }

  onclick(location)
  {
    L.popup().setLatLng(location.latlng).setContent('you clicked at' + location.latlng.toString()).addTo(this.map);
  }
}
