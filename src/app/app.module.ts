import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListService } from "../services/list.service";
import { BeerListComponent } from "../pages/beer-list/beer-list.component";
import { DiscoverComponent } from "../pages/discover/discover";

@NgModule({
    declarations: [
        MyApp,
        BeerListComponent,
        DiscoverComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        BeerListComponent,
        DiscoverComponent
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ListService]
})
export class AppModule {
}
