import { Component } from '@angular/core';

import { AppComponent } from '../../index';


// @Component({
//     selector: 'quick-match',
//     templateUrl: './quick-match.component.html',
//     styleUrls: ['./quick-match.component.scss']
// })
export class QuickMatchComponent {
    title = 'Quick Match';
    a = 0

    changeA(a: any) {
        if (this.a == 2) {
            this.a = 0;
        } else {
            this.a = this.a + 1;
        }
    }
    config = [{
        "name": "Baneforth",
        "settings": [
            {
                "name": "Start Mode",
                "value": [
                    "Normal", "First Attacker", "Trap"
                ]
            }, {
                "name": "First Attackant",
                "value": "CharactersOptions"
            }, {
                "name": "Trap Alert Level",
                "value": "25"
            }, {
                "name": "Number of teams",
                "value": 2
            }
        ]
    }

    ]
}
