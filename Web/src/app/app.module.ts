import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorComponent } from './error/error.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptors';
import { ToastrModule } from 'ngx-toastr';
//import { NgxSpinnerModule } from 'ngx-spinner';
//import { LoadingInterceptor } from './core/interceptors/loading.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    ToastrModule.forRoot()
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
