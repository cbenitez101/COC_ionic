import { Component, ViewEncapsulation } from '@angular/core';

import { NavController} from 'ionic-angular';



@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
   styles: ['body{background-color:#000}'],
   encapsulation: ViewEncapsulation.None
})
export class InicioPage {

  
  constructor(public navCtrl: NavController) {
   
  }
 
}