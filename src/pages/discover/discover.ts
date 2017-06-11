import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DiscoverDetails } from "../discover-detail/discover-detail";
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
    selector: 'discover',
    templateUrl: 'discover.html',
})
export class DiscoverComponent {
    classNames: any = ["hoppy", "balanced", "malty", "tart"];
    discoverSkeleton: any = {
        "items": [
            {
                "name": "hopfig",
                "subcategories": [
                    {
                        "name": "dezent hopfig",
                        "subcategories": [
                            {
                                "name": "Röstaromen, dunkle Farben",
                                "style": "AMERICAN BLACK ALE",
                                "ids": [
                                  1,
                                  6
                                ]
                            },
                            {
                                "name": "süsslicher Hopfengeschmack, leicht malzig",
                                "style": "BELGIAN  PALE ALE",
                                "ids": [
                                  62
                                ]
                            },
                            {
                                "name": "mässig bitter, helle Farbe",
                                "subcategories": [
                                    {
                                        "name": "weizig, malzig",
                                        "style": "AMERICAN PALE WHEAT ALE",
                                        "ids": [
                                          112
                                        ]
                                    },
                                    {
                                        "name": "spritzig, ausgeglichen",
                                        "subcategories": [
                                            {
                                                "name": "Amerikanische Brauart",
                                                "style": "AMERICAN PALE ALE",
                                                "ids": [
                                                  41
                                                ]
                                            },
                                            {
                                                "name": "trocken, weinartige Aromen, leichte bis mittlere Bitterkeit",
                                                "style": "KÖLSCH",
                                                "ids": [
                                                  45
                                                ]
                                            },
                                            {
                                                "name": "würzig, herb",
                                                "style": "GERMAN PILS",
                                                "ids": [
                                                  75
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "stark hopfig",
                        "subcategories": [
                            {
                                "name": "würzig",
                                "subcategories": [
                                    {
                                        "name": "mittlerer Alkoholgehalt, herb, Citrusaromen",
                                        "style": "IPA",
                                        "ids": [
                                            2,
                                            30,
                                            164
                                        ]
                                    },
                                    {
                                        "name": "kräftig und malzig",
                                        "style": "DOUBLE / IMPERIAL IPA",
                                        "ids": [
                                            31
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "ausgeglichen",
                "subcategories": [
                    {
                        "name": "helle Farbe",
                        "subcategories": [
                            {
                                "name": "mild fruchtig, leichte hopfige Bitterkeit",
                                "style": "ESB, CALIFORNIA COMMON, BLONDE",
                                "ids": [
                                  110
                                ]
                            },
                            {
                                "name": "Hefearomen, trocken, leicht würzig.",
                                "style": "HEFEWEIZEN",
                                "ids": [
                                  48
                                ]
                            }
                        ]
                    },
                    {
                        "name": "dunkle Farbe",
                        "subcategories": [
                            {
                                "name": "leicht und vollmundig",
                                "subcategories": [
                                    {
                                        "name": "milde Röstaromen. Malzgaromen.",
                                        "style": "SCHWARZBIER",
                                        "ids": [
                                          84
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "ausgeglichener körper",
                                "subcategories": [
                                    {
                                        "name": "trockene Röstaromen. Aromen von Karamel, Schokolade oder Kaffee. leicht süsslich.",
                                        "style": "ROBUST PORTER & AMERICAN STYLE STOUT",
                                        "ids": [
                                          19,
                                          42
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "malzig",
                "subcategories": [
                    {
                        "name": "dunkle Röstaromen",
                        "subcategories": [
                            {
                                "name": "leichte ausgeglichene Bitteraromen",
                                "style": "BOCK",
                                "ids": [
                                  88
                                ]
                            },
                            {
                                "name": "vollmundig und kräftig",
                                "subcategories": [
                                    {
                                        "name": "Aromen von Schokolade, Dörrfrüchten und Malz",
                                        "subcategories": [
                                            {
                                                "name": "hoher alkoholgehalt",
                                                "style": "IMPERIAL STOUT",
                                                "ids": [
                                                  16,
                                                  43
                                                ]
                                            },
                                            {
                                                "name": "mittlerer alkoholgehalt",
                                                "style": "DOPPELBOCK & MÄRZEN",
                                                "ids": [
                                                  90,
                                                  81
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "raucharomen",
                                "style": "RAUCHBIER",
                                "ids": [
                                  54,
                                  85,
                                  86,
                                  87
                                ]
                            }
                        ]
                    },
                    {
                        "name": "fruchtig, Citrusaromen",
                        "subcategories": [
                            {
                                "name": "würzig, Alkoholaromen",
                                "subcategories": [
                                    {
                                        "name": "süsslich",
                                        "style": "TRIPEL",
                                        "ids": [
                                          59
                                        ]
                                    },
                                    {
                                        "name": "komplex mit dunklen Malzaromen",
                                        "style": "BELGIAN STRONG DARK ALE",
                                        "ids": [
                                          64
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "vollmundig, süssliche malzaromen, brotaromen",
                                "style": "MAIBOCK / HELLES",
                                "ids": [
                                  89
                                ]
                            },
                            {
                                "name": "hefig",
                                "style": "DUNKEL",
                                "ids": [
                                  83
                                ]
                            }
                        ]
                    },
                    {
                        "name": "vollmundig, karamelaromen",
                        "subcategories": [
                            {
                                "name": "röstige malzaromen, hoher alkoholgehalt",
                                "style": "WEE HEAVY & SCOTCH ALE",
                                "ids": [
                                  15
                                ]
                            },
                            {
                                "name": "dunkle fruchtaromen, milde hopfenbitterkeit",
                                "style": "DUBBEL",
                                "ids": [
                                  58
                                ]
                            },
                            {
                                "name": "dunkel, alkoholaromen, gäraromen",
                                "style": "QUAD",
                                "ids": [
                                  60
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "säuerlich",
                "subcategories": [
                    {
                        "name": "milde bis mittlere saueraromen",
                        "subcategories": [
                            {
                                "name": "fruchtige, erdige hefearomen",
                                "style": "SAISON & FARMHOUSE ALE",
                                "ids": [
                                  72
                                ]
                            },
                            {
                                "name": "würzige orangen- oder korianderaromen",
                                "style": "WIT",
                                "ids": [
                                  65
                                ]
                            }
                        ]
                    },
                    {
                        "name": "prickelnd",
                        "subcategories": [
                            {
                                "name": "stark prickelnd",
                                "style": "GUEUZE",
                                "ids": [
                                  67
                                ]
                            },
                            {
                                "name": "leicht prickelnd, schaumig",
                                "style": "LAMBIC & BERLINER WEISSE",
                                "ids": [
                                  66,
                                  46
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    constructor(public navController: NavController,
                public navParams: NavParams,
                private splashScreen: SplashScreen) {
    }

    openNavDetailsPage(item) {
        this.navController.push(DiscoverDetails, {item: item});
    }

}
