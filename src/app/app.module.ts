import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { MenuPage } from '../pages/menu/menu';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { FranquiciaPage } from '../pages/franquicia/franquicia';
import { ContactoPage } from '../pages/contacto/contacto';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
   apiKey: "AIzaSyC_qg8N2tG02aaJFnisqutL_WnAlIsENhk",
    authDomain: "daw2-54c6e.firebaseapp.com",
    databaseURL: "https://daw2-54c6e.firebaseio.com",
    storageBucket: "daw2-54c6e.appspot.com",
    messagingSenderId: "1058226606134"
};

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    MenuPage,
    RestaurantesPage,
    FranquiciaPage,
    ContactoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    MenuPage,
    RestaurantesPage,
    FranquiciaPage,
    ContactoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
