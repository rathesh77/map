import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'map-api';
  displayContent : Boolean = false;

  ngOnInit()
  {
    setTimeout(()=>{
      this.displayContent = true;
    },5500)
  }
}
