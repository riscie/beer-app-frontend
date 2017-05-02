import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DiscoverDetails } from "../discover-detail/discover-detail";


@Component({
    selector: 'discover',
    templateUrl: 'discover.html',
})
export class DiscoverComponent {
    classNames: any = ["hoppy", "balanced", "malty", "tart"];
    discoverSkeleton: any = {
        "items": [
            {
                "name": "hoppy",
                "subcategories": [
                    {
                        "name": "somewhat hoppy",
                        "subcategories": [
                            {
                                "name": "dark and toasty",
                                "style": "AMERICAN BLACK ALE",
                                "ids": [1, 6]
                            },
                            {
                                "name": "delicately hopped with sweetish to toasty maltiness",
                                "style": "BELGIAN  PALE ALE",
                                "ids": []
                            },
                            {
                                "name": "moderate bitterness, pale",
                                "subcategories": [
                                    {
                                        "name": "wheat malt undertones",
                                        "style": "AMERICAN PALE WHEAT ALE",
                                        "ids": []
                                    },
                                    {
                                        "name": "crisp & balanced",
                                        "subcategories": [
                                            {
                                                "name": "clean, hoppy, american",
                                                "style": "AMERICAN PALE ALE",
                                                "ids": []
                                            },
                                            {
                                                "name": "dry with vinous flavors, medium to slightly assertive hop bitterness",
                                                "style": "KÖLSCH",
                                                "ids": []
                                            },
                                            {
                                                "name": "spicy herbal & floral flavors, coarse",
                                                "style": "GERMAN PILS",
                                                "ids": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "wicked hoppy",
                        "subcategories": [
                            {
                                "name": "spicy",
                                "subcategories": [
                                    {
                                        "name": "medium ABV, herbal / citric hops, bitter",
                                        "style": "IPA",
                                        "ids": [
                                            2,
                                            30,
                                            164
                                        ]
                                    },
                                    {
                                        "name": "the bigger the better; robust & malty",
                                        "style": "DOUBLE / IMPERIAL IPA",
                                        "ids": [
                                            31
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "hoppy, but still sweet; clean bitterness, dry edge",
                                "style": "BELGIAN IPA",
                                "ids": []
                            }
                        ]
                    }
                ]
            },
            {
                "name": "balanced",
                "subcategories": [
                    {
                        "name": "light in color",
                        "subcategories": [
                            {
                                "name": "mild fruitiness & light hopp bitterness",
                                "style": "ESB, CALIFORNIA COMMON, BLONDE",
                                "ids": []
                            },
                            {
                                "name": "yeasty, dry, some spice, light hops",
                                "style": "HEFEWEIZEN",
                                "ids": []
                            }
                        ]
                    },
                    {
                        "name": "dark in color",
                        "subcategories": [
                            {
                                "name": "light bodied",
                                "subcategories": [
                                    {
                                        "name": "mild roasted malt & noble hop flavor",
                                        "style": "SCHWARZBIER",
                                        "ids": []
                                    }
                                ]
                            },
                            {
                                "name": "medium to full bodied",
                                "subcategories": [
                                    {
                                        "name": "dry roasted bitterness with caramel, chocolate coffee & med-high hop bitterness, malt sweetness",
                                        "style": "ROBUST PORTER & AMERICAN STYLE STOUT",
                                        "ids": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "malty",
                "subcategories": [
                    {
                        "name": "dark & toasty",
                        "subcategories": [
                            {
                                "name": "low balancing bitterness",
                                "style": "BOCK",
                                "ids": []
                            },
                            {
                                "name": "rich and full bodied",
                                "subcategories": [
                                    {
                                        "name": "chocolate, roasted, burnt malt & dark fruit",
                                        "subcategories": [
                                            {
                                                "name": "size matters",
                                                "style": "RUSSIAN IMPERIAL",
                                                "ids": []
                                            },
                                            {
                                                "name": "medium ABV",
                                                "style": "DOPPELBOCK & MÄRZEN",
                                                "ids": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "robust smokiness",
                                "style": "RAUCHBIER",
                                "ids": []
                            }
                        ]
                    },
                    {
                        "name": "fruity & estery",
                        "subcategories": [
                            {
                                "name": "spicy and alcoholic",
                                "subcategories": [
                                    {
                                        "name": "sweetness from pale",
                                        "style": "TRIPEL",
                                        "ids": []
                                    },
                                    {
                                        "name": "complex with mild dark malts",
                                        "style": "BELGIAN STRONG DARK ALE",
                                        "ids": []
                                    }
                                ]
                            },
                            {
                                "name": "rich, sweet malts, bready",
                                "style": "MAIBOCK / HELLES",
                                "ids": []
                            },
                            {
                                "name": "yeasty",
                                "style": "DUNKEL",
                                "ids": []
                            }
                        ]
                    },
                    {
                        "name": "rich, steely caramel",
                        "subcategories": [
                            {
                                "name": "roasted malt, high ABV",
                                "style": "WEE HEAVY & SCOTCH ALE",
                                "ids": []
                            },
                            {
                                "name": "some dark fruit & mild hop bitterness",
                                "style": "DUBBEL",
                                "ids": []
                            },
                            {
                                "name": "bold, dark, moderate phenols, alcoholic",
                                "style": "QUAD",
                                "ids": []
                            }
                        ]
                    }
                ]
            },
            {
                "name": "tart",
                "subcategories": [
                    {
                        "name": "mild to moderate tartness",
                        "subcategories": [
                            {
                                "name": "fruity, earthy, yeasty",
                                "style": "SAISON & FARMHOUSE ALE",
                                "ids": []
                            },
                            {
                                "name": "orange peel, coriander & spice",
                                "style": "WIT",
                                "ids": []
                            }
                        ]
                    },
                    {
                        "name": "puckering",
                        "subcategories": [
                            {
                                "name": "really puckering",
                                "style": "GUEUZE",
                                "ids": []
                            },
                            {
                                "name": "light bodied, crisp",
                                "style": "LAMBIC & BERLINER WEISSE",
                                "ids": []
                            }
                        ]
                    }
                ]
            }
        ]
    };

    constructor(public navController: NavController,
                public navParams: NavParams,) {
    }

    openNavDetailsPage(item) {
        console.log(item);
        this.navController.push(DiscoverDetails, {item: item});
    }

}
