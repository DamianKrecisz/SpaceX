import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { PanelComponent } from './components/search-page/panel/panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { DatePipe } from './core/pipes/date.pipe';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor/http-error-interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    PanelComponent,
    DetailsComponent,
    DatePipe,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CheckboxModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    GalleriaModule,
    ProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
