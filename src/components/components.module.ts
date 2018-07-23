import {NgModule} from '@angular/core';
import {PreviewimgComponent} from './previewimg/previewimg';
import {ComponentDemoComponent} from './component-demo/component-demo';
import { MapComponent } from './map/map';

@NgModule({
    declarations: [PreviewimgComponent,
        ComponentDemoComponent,
    MapComponent,
        ],
    imports: [],
    exports: [PreviewimgComponent,
        ComponentDemoComponent,
    MapComponent,
        ]
})
export class ComponentsModule {
}
