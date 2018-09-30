import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ResponsiveTableComponent } from './ui/responsive-table/responsive-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    ResponsiveTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
