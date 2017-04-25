import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListService } from "../services/list.service";
import { BeerListComponent } from "../pages/beer-list/beer-list.component";
import { DiscoverComponent } from "../pages/discover/discover";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
    declarations: [
        MyApp,
        BeerListComponent,
        DiscoverComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        BeerListComponent,
        DiscoverComponent
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ListService,
        SplashScreen,
        StatusBar
    ]
})
export class AppModule {
}
