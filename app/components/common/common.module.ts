import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BaseModule } from "@batch-flask/ui";
import { EditMetadataFormComponent } from "./edit-metadata-form";
import { GuardsModule } from "./guards";
import { InlineQuotaComponent } from "./inline-quota";

const privateComponents = [];
const publicComponents = [
    InlineQuotaComponent,
    EditMetadataFormComponent,
];

const publicModules = [
    GuardsModule,
];
/**
 * Commons module shouldn't import any module that:
 *  - are not external dependencies
 *  - BaseModule and other Common components are the only exceptions.
 */
@NgModule({
    imports: [BrowserModule, BaseModule, FormsModule, ReactiveFormsModule, ...publicModules],
    declarations: [...privateComponents, publicComponents],
    exports: [...publicComponents, ...publicModules],
    entryComponents: [EditMetadataFormComponent],
})
export class CommonModule {

}