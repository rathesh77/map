import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
display:string = "block";
links : any[] =[
{
  'name':'Plan',
  'icon' :  'assets/images/marqueur.png',
},
{
  'name':'Satellite',
  'icon' :  'assets/images/satellite.png',

},
{
  'name':'Relief',
  'icon' :  'assets/images/image.png',

},
{
  'name':'Globe',
  'icon' :  'assets/images/globe.png',

},
{
  'name':'Trafic',
  'icon' :  'assets/images/car.png',

},
{
  'name':'Transports en commun',
  'icon' :  'assets/images/train.png',

},
{
  'name':'À vélo',
  'icon' :  'assets/images/bike.png',

},{
  'name':'Street View',
  'icon' :  'assets/images/navigation.png',

},{
  'name':'Notifications',
  'icon' :  'assets/images/notification.png',

},
{
  'name':'Partage de position',
  'icon' :  'assets/images/distance.png',

},
{
  'name':'Vos adresses',
  'icon' :  'assets/images/notebook.png',

},
{
  'name':'Vos contributions',
  'icon' :  'assets/images/charity.png',

},
{
  'name':'Vos trajets',
  'icon' :  'assets/images/purpose.png',

},
{
  'name':'Vos données dans Maps',
  'icon' :  'assets/images/computer.png',

},{
  'name':'Partager ou intégrer la carte',
  'icon' :  'assets/images/share.png',

},{
  'name':'Imprimer',
  'icon' :  'assets/images/print.png',

}

];

  constructor() {console.log(this.links); }

  ngOnInit() {
  }
  disp()
  {
    if ( this.display =='none')
    this.display = "block";
    else
    this.display = "none";

  }

}
