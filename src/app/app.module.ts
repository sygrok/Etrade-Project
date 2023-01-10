import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { GuestNavbarComponent } from './layouts/guest-navbar/guest-navbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestPageComponent,
    RegisterPageComponent,
    GuestNavbarComponent,
    FilterPipe,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
