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
                "name": "hopfig",
                "subcategories": [
                    {
                        "name": "dezent hopfig",
                        "subcategories": [
                            {
                                "name": "röstaromen, dunkle farben",
                                "style": "AMERICAN BLACK ALE",
                                "ids": [1, 6]
                            },
                            {
                                "name": "süsslicher hopfengeschmack, leicht malzig",
                                "style": "BELGIAN  PALE ALE",
                                "ids": []
                            },
                            {
                                "name": "mässig bitter, helle farbe",
                                "subcategories": [
                                    {
                                        "name": "wheat malt undertones",
                                        "style": "AMERICAN PALE WHEAT ALE",
                                        "ids": []
                                    },
                                    {
                                        "name": "spritzig, ausgeglichen",
                                        "subcategories": [
                                            {
                                                "name": "amerikanische brauart",
                                                "style": "AMERICAN PALE ALE",
                                                "ids": []
                                            },
                                            {
                                                "name": "trocken, weinartige aromen, leichte bis mittlere bitterkeit",
                                                "style": "KÖLSCH",
                                                "ids": []
                                            },
                                            {
                                                "name": "würzig, herb",
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
                        "name": "stark hopfig",
                        "subcategories": [
                            {
                                "name": "würzig",
                                "subcategories": [
                                    {
                                        "name": "mittlerer alkoholgehalt, herb, citrusaromen",
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
                            },
                            {
                                "name": "hopfig aber süsslich. Leichte trockene bitteraromen.",
                                "style": "BELGIAN IPA",
                                "ids": []
                            }
                        ]
                    }
                ]
            },
            {
                "name": "ausgeglichen",
                "subcategories": [
                    {
                        "name": "helle farbe",
                        "subcategories": [
                            {
                                "name": "mild fruchtig, leichte hopfige bitterkeit",
                                "style": "ESB, CALIFORNIA COMMON, BLONDE",
                                "ids": []
                            },
                            {
                                "name": "hefearomen, trocken, leicht würzig.",
                                "style": "HEFEWEIZEN",
                                "ids": []
                            }
                        ]
                    },
                    {
                        "name": "dunkle farbe",
                        "subcategories": [
                            {
                                "name": "leicht und vollmundig",
                                "subcategories": [
                                    {
                                        "name": "milde röstaromen. malzgaromen.",
                                        "style": "SCHWARZBIER",
                                        "ids": []
                                    }
                                ]
                            },
                            {
                                "name": "ausgeglichener körper",
                                "subcategories": [
                                    {
                                        "name": "trockene röstaromen. Aromen von Karamel, Schockolade oder Kaffee. Leicht süsslich.",
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
                "name": "malzig",
                "subcategories": [
                    {
                        "name": "dunkle röstaromen",
                        "subcategories": [
                            {
                                "name": "leichte ausgeglichene bitteraromen",
                                "style": "BOCK",
                                "ids": []
                            },
                            {
                                "name": "vollmundig und kräftig",
                                "subcategories": [
                                    {
                                        "name": "Aromen von Schockolade, dörrfrüchten und malz",
                                        "subcategories": [
                                            {
                                                "name": "hoher alkoholgehalt",
                                                "style": "RUSSIAN IMPERIAL",
                                                "ids": []
                                            },
                                            {
                                                "name": "mittlerer alkoholgehalt",
                                                "style": "DOPPELBOCK & MÄRZEN",
                                                "ids": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "raucharomen",
                                "style": "RAUCHBIER",
                                "ids": []
                            }
                        ]
                    },
                    {
                        "name": "fruchtig, citrusaromen",
                        "subcategories": [
                            {
                                "name": "würzig, alkoholaromen",
                                "subcategories": [
                                    {
                                        "name": "süsslich",
                                        "style": "TRIPEL",
                                        "ids": []
                                    },
                                    {
                                        "name": "komplex mit dunklen malzaromen",
                                        "style": "BELGIAN STRONG DARK ALE",
                                        "ids": []
                                    }
                                ]
                            },
                            {
                                "name": "vollmundig, süssliche malzaromen, brotaromen",
                                "style": "MAIBOCK / HELLES",
                                "ids": []
                            },
                            {
                                "name": "hefig",
                                "style": "DUNKEL",
                                "ids": []
                            }
                        ]
                    },
                    {
                        "name": "vollmundig, karamelaromen",
                        "subcategories": [
                            {
                                "name": "röstige malzaromen, hoher alkoholgehalt",
                                "style": "WEE HEAVY & SCOTCH ALE",
                                "ids": []
                            },
                            {
                                "name": "dunkle fruchtaromen, milde hopfenbitterkeit",
                                "style": "DUBBEL",
                                "ids": []
                            },
                            {
                                "name": "dunkel, alkoholaromen, gäraromen",
                                "style": "QUAD",
                                "ids": []
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
                                "ids": []
                            },
                            {
                                "name": "würzige orangen- oder korianderaromen",
                                "style": "WIT",
                                "ids": []
                            }
                        ]
                    },
                    {
                        "name": "prickelnd",
                        "subcategories": [
                            {
                                "name": "stark prickelnd",
                                "style": "GUEUZE",
                                "ids": []
                            },
                            {
                                "name": "leicht prickelnd, schaumig",
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
        this.navController.push(DiscoverDetails, {item: item});
    }

}
