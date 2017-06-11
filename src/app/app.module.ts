import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {BeerService} from "../services/beer.service";
import {BeerListComponent} from "../pages/beer-list/beer-list.component";
import {DiscoverComponent} from "../pages/discover/discover";
import {DiscoverDetails} from "../pages/discover-detail/discover-detail";
import {FavsComponent} from "../pages/favs/favs.components";
import {FavService} from "../services/fav.service";
import {BeerDetailComponent} from "../pages/beer-detail/beer-detail.component";
import {AboutComponent} from "../pages/about/about.component";
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        BeerListComponent,
        DiscoverComponent,
        DiscoverDetails,
        FavsComponent,
        BeerDetailComponent,
        AboutComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        BeerListComponent,
        DiscoverComponent,
        DiscoverDetails,
        FavsComponent,
        BeerDetailComponent,
        AboutComponent
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        BeerService,
        FavService,
        SplashScreen
    ]
})
export class AppModule {
}
