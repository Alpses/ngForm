import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title:string ;
  private userName:string ;
  private userId:string ;
  constructor(){
    this.title = 'ngForm';
    this.userName = 'Jogn';
    this.userId = 'Fire' ;
  }

}
