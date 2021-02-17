import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ApplicationComponentComponent } from './component/application-component/application-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { SourceComponent } from './component/source/source.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

//Routing et liaison pour la navigation
const appRoutes : Routes = [
  { path: '', component: ComponentComponent}, //localhost:4200
  { path: 'component', component:  ComponentComponent},
  { path: 'application', component: ApplicationComponentComponent},
  { path: 'source', component: SourceComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NavbarComponent,
    ApplicationComponentComponent,
    ContactComponent,
    SourceComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
