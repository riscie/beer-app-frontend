import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page2 } from '../pages/page2/page2';
import { ListService } from "../services/list.service";
import { BeerListComponent } from "../pages/beer-list/beer-list.component";

@NgModule({
    declarations: [
        MyApp,
        BeerListComponent,
        Page2
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        BeerListComponent,
        Page2
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ListService]
})
export class AppModule {
}
