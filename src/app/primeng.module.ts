import { NgModule } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";

@NgModule({
    imports: [
        ButtonModule,
        DialogModule,
    ],
    exports: [
        ButtonModule,
        DialogModule,
    ]
})
export class PrimeNGModule {

}