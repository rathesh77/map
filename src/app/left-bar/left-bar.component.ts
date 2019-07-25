import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
display:string = "block";
links : string [] =
[

  'Plan',
  'Satellite',
  'Relief',
'Globe',
'Trafic',
'Transports en commun',
'À vélo',
'Street View',
'Notifications',
'Partage de position',
'Vos adresses',
'Vos contributions',
'Vos trajets',
'Vos données dans Maps',
'Partager ou intégrer la carte',
'Imprimer'
]
  constructor() { }

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
