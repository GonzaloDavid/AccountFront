import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ResultLoadFileComponent } from './components/result-load-file/result-load-file.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountListComponent } from './components/account-list/account-list.component';
import { TrackingFileComponent } from './components/tracking-file/tracking-file.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackingFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ButtonModule, TableModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
