import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Lorenzo-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Description ready!");
    
  }

}
