import { Component } from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';

/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
dishes: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
  af: AngularFire, public actionSheetCtrl: ActionSheetController) {
	  this.dishes = af.database.list('/dishes');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

addDish(){
  let prompt = this.alertCtrl.create({
    title: 'Dish Name',
    message: "Enter a name for this new dish you're so keen on adding",
    inputs: [
      {
        name: 'nombre',
        placeholder: 'Nombre'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.dishes.push({
            nombre: data.nombre
          });
        }
      }
    ]
  });
  prompt.present();
}


showOptions(dishId, dishTitle) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete Dish',
        role: 'destructive',
        handler: () => {
          this.removeDish(dishId);
        }
      },{
        text: 'Update title',
        handler: () => {
          this.updateDish(dishId, dishTitle);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}


removeDish(dishId: string){
  this.dishes.remove(dishId);
}


updateDish(dishId, dishTitle){
  let prompt = this.alertCtrl.create({
    title: 'Dish Name',
    message: "Update the name for this dish",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
        value: dishTitle
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.dishes.update(dishId, {
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}

}
