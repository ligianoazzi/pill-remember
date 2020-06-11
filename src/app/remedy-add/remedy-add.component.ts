import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-remedy-add',
  templateUrl: './remedy-add.component.html',
  styleUrls: ['./remedy-add.component.css']
})
export class RemedyAddComponent implements OnInit {

  contatos: Array<any>;
  contato: any;  

  constructor() { }

  ngOnInit() {
    this.contato = {};


  }

	postar() {
	  /*if (this.myform.valid) {
	    console.log("Form Submitted!");
	  }*/
	  console.log("Form Submitted!");
	  
	}  

  criar(frm: FormGroup) {
    //  frm.reset();
    console.log(frm.value.remedyName);

    localStorage.setItem(frm.value.remedyName, frm.value.time);

    location.reload();

    
  }


}
