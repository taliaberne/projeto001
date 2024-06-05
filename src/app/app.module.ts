import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"projeto001-ccdcc","appId":"1:987084937236:web:508e9e6865caf22d272f01","storageBucket":"projeto001-ccdcc.appspot.com","apiKey":"AIzaSyAGioa7Kclxo7iQsVYvr00a2Pu2FHHvBcc","authDomain":"projeto001-ccdcc.firebaseapp.com","messagingSenderId":"987084937236"})), provideAuth(() => getAuth())],
  bootstrap: [AppComponent],
})
export class AppModule {}
