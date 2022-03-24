import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {



sall:any=0;

  typeofcard()
  {
    if(this.sall>=20000 && this.sall<30000)
    {
      alert("Silver Card");
    }
    else if(this.sall >=30000 && this.sall<=40000)
    {
      alert("Gold");
    }
    else
    {
      alert("Platinum");
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
