import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {DiscoverComponent} from "../pages/discover/discover";
import {FavsComponent} from "../pages/favs/favs.components";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = DiscoverComponent;

    pages: Array<{ title: string, icon: string, component: any }>;

    constructor(public platform: Platform) {
        this.initializeApp();
        this.pages = [
            {title: 'Finde Dein Bier', icon: 'ios-beer', component: DiscoverComponent},
            {title: 'Deine Favoriten', icon: 'heart', component: FavsComponent}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
