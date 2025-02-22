import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultLoadFileComponent } from './components/result-load-file/result-load-file.component';


export const routes: Routes = [
  { path : "account-load-file", component: ResultLoadFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
