import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {



constructor() {
	var recursive = function () {
	    console.log("1 second");

		var d = new Date();
		var m = d.getMinutes();
		var h = d.getHours();
		//if (h < 10)  h = '0'+h;


		var date_time = `${h}:${m}`;


		for(var i=0, len=localStorage.length; i<len; i++) {
		    var key = localStorage.key(i);
		    var value = localStorage[key];
		    //console.log(key + " => " + value); // Cloroquina 2 => 00:16
			if(date_time == value){
				alert("alarm:"+ key);
				//var elem = document.querySelector('#receive-alert');				
				//document.querySelector('#receive-alert').style = "block";
				//elem.style = 'block';
				//elem.innerHTML = key;
			}else{

				//var elem = document.querySelector('#receive-alert');
				//document.querySelector('#receive-alert').display = "block";
				//console.log(elem);
				//elem.style = 'none';
				//elem.innerHTML = "";
			}
		}	  

		  console.log(date_time);

	    setTimeout(recursive,1000);
	}
	recursive();
}

  listar() {
   // return this.http.get<Array<any>>(this.contatosUrl);
   return "oi";
  }

  criar(contato: any) {
    console.log(contato);
  }




}