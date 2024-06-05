import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewService } from './_services/view.service';
import { FilterService } from './_services/filter.service';
import { ApiService } from './_services/api.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ViewComponent,
    HomeComponent,
    CharacterComponent,
    FooterComponent,
  ],
  providers: [ViewService, FilterService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
