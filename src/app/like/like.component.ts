import { Component, OnInit } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Lorenzo-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  isLike = false;
  testo = "Like!";


  dislike = () => {
    this.isLike = !this.isLike;
    if (this.isLike === false) {
      this.testo = "Dislike!";
    } else { this.testo = "Like!"; }



  }
  constructor() { }

  ngOnInit() {
  }

}
