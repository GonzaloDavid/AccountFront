import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BulkProcessComponent } from './components/bulk-process/bulk-process.component';
import { LoadFileComponent } from './components/load-file/load-file.component';
import { ResultLoadFileComponent } from './components/result-load-file/result-load-file.component';

@NgModule({
  declarations: [
    AppComponent,
    BulkProcessComponent,
    LoadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ButtonModule, TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
