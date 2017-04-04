import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { BeerListComponent } from "../pages/beer-list/beer-list.component";
import { DiscoverComponent } from "../pages/discover/discover";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = DiscoverComponent;

    pages: Array<{title: string, icon: string, component: any}>;

    constructor(public platform: Platform) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Discover', icon: 'locate', component: DiscoverComponent},
            {title: 'Beer List', icon: 'beer', component: BeerListComponent},
            {title: 'Favs', icon: 'heart', component: DiscoverComponent}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
