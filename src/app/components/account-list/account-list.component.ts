import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
    standalone: true,
    imports: [TableModule],
})
export class AccountListComponent {

  @Input() accountList:any[]=[];
  constructor(){

  }

}
