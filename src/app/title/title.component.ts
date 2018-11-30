import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  title: String = 'ciao';
  nome = "Lorenzo";
  counter = 0;
  isOff = true;


  greet = () => {
    return "ciao " + this.nome;
  }

  increment = () => {
    this.counter++;
    this.isOff = !this.isOff;
    console.log(this.counter);

  }

  constructor() { }

  ngOnInit() {
    console.log("Title component ready!");

    // setInterval(this.increment, 1 * 1000);
  }

}
