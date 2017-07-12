import { Component } from "@angular/core";

@Component({
    selector: 'pm-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
             <pm-products></pm-products>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Acme Produkt Management by JS with IntelliJ and Visual Studio Code';
 }
