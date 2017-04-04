import { Component } from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
/*
  Generated class for the Restaurantes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html'
})
export class RestaurantesPage {
 restaurants: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
  af: AngularFire, public actionSheetCtrl: ActionSheetController) {
	  this.restaurants = af.database.list('/restaurants');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantesPage');
  }

addRestaurant(){
  let prompt = this.alertCtrl.create({
    title: 'Restaurant Name',
    message: "Enter a name for this new restaurant you're so keen on adding",
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
          this.restaurants.push({
            nombre: data.nombre
          });
        }
      }
    ]
  });
  prompt.present();
}


showOptions(restaurantId, restaurantTitle) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete Restaurant',
        role: 'destructive',
        handler: () => {
          this.removeRestaurant(restaurantId);
        }
      },{
        text: 'Update title',
        handler: () => {
          this.updateRestaurant(restaurantId, restaurantTitle);
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


removeRestaurant(restaurantId: string){
  this.restaurants.remove(restaurantId);
}


updateRestaurant(restaurantId, restaurantTitle){
  let prompt = this.alertCtrl.create({
    title: 'Restaurant Name',
    message: "Update the name for this restaurant",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
        value: restaurantTitle
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
          this.restaurants.update(restaurantId, {
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}


}
