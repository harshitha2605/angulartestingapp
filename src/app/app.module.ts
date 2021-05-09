import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleOfApplicationComponent } from './title-of-application/title-of-application.component';
import { BodyOfApplicationComponent } from './body-of-application/body-of-application.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleOfApplicationComponent,
    BodyOfApplicationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
