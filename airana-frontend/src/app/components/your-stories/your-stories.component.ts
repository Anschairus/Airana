import { Component } from '@angular/core';

import { AppComponent } from '../../index';


@Component({
    selector: 'your-stories',
    templateUrl: './your-stories.component.html',
    styleUrls: ['./your-stories.component.scss']
})
export class YourStoriesComponent {
    title = 'Your Stories';
    storyHref(u: any): any {
        return (u.replace(/\s+/g, "-")).toLowerCase();
    }

    stories = [{
        "name": "emissaries of the void",
        "mode": "airana"
    }];
}
