import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {AuthContentComponent} from './auth-content/auth-content.component';
import {HeaderComponent} from './header/header.component';
import {WelcomeContentComponent} from './welcome-content/welcome-content.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {ContentComponent} from './content/content.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginFormComponent,
        WelcomeContentComponent,
        AuthContentComponent,
        ContentComponent,
        ButtonsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
