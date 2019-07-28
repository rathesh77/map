import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'map-api';
  afficher : boolean = false;

  ngOnInit()
  {
        setTimeout(()=>{this.afficher = true;},8000);
  }
}
