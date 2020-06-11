import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remedy-list',
  templateUrl: './remedy-list.component.html',
  styleUrls: ['./remedy-list.component.css']
})
export class RemedyListComponent implements OnInit {

  	remedyList = Object.entries(localStorage);




  constructor() {

	  

 	//  this.list=JSON.parse( localStorage.getItem('paracetamol'));



  }

  ngOnInit() {



  }

}
