import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-google-map',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHi(){
    alert('Jai ganesh');
  }

}
