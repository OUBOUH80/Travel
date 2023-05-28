import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';
import { CardProfileComponent } from './home/card-profile/card-profile.component';
import { AdminComponent } from './admin/admin.component';
import { AddCardComponent } from './admin/add-card/add-card.component';


const appRoute: Routes =[
  {path: '',redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', component:CardComponent},
  {path: 'LogIn', component:AdminComponent}

]


@NgModule({
  declarations: [AppComponent, AuthComponent, HeaderComponent, FooterComponent, HomeComponent, CardComponent, CardProfileComponent, AdminComponent, AddCardComponent],
  imports: [BrowserModule,
            BrowserAnimationsModule,
            AppRoutingModule,
            RouterModule.forRoot(appRoute),
            FormsModule,
            HttpClientModule],
            
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [], 
  bootstrap: [AppComponent]
 
})
export class AppModule { }
