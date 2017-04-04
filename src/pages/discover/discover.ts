import { Component, trigger, state, transition, animate, style, keyframes } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'discover',
    templateUrl: 'discover.html',
    animations: [
        trigger('animationTrigger', [
            state('small', style({'min-height': '0'})),
            state('big', style({'min-height': '75vh'})),
            transition('small => big', [
                animate(550,
                    keyframes([
                        style({'min-height': '85vh', offset: 0.5}),
                        style({'min-height': '75vh', offset: 1})
                    ])),
            ]),
            transition('big => small', [
                animate('0.25s ease-out',)
            ])
        ])
    ]
})
export class DiscoverComponent {
    selectedItem: any;
    icons: string[];
    animationState: any = {
        hoppy: "small",
        balanced: "small",
        malty: "small",
        tart: "small"
    };
    items: any = [
        {
            name: "hoppy",
            subcategories: [
                {name: "somewhat hoppy"},
                {name: 'wicked hoppy'}
            ]
        },
        {
            name: "balanced",
            subcategories: [
                {name: "light in color"},
                {name: 'dark in color'}
            ]
        },
        {
            name: "malty",
            subcategories: [
                {name: "dark & toasty"},
                {name: 'fruity & estery'},
                {name: 'rich, steely caramel'}
            ]
        },
        {
            name: "tart",
            subcategories: [
                {name: "mild to moderate tartness"},
                {name: 'puckering'}
            ]
        }];

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
    }

    triggerAnimation(item: string) {
        console.log(`animate ${item}`);
        var newState = this.animationState[item] === 'small' ? 'big' : 'small';
        this.animationState = {
            hoppy: "small",
            balanced: "small",
            malty: "small",
            tart: "small"
        };
        this.animationState[item] = newState;
    }

    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(DiscoverComponent, {
            item: item
        });
    }
}
