import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  standalone: true,
  imports: [TableModule, CommonModule],
})
export class AccountListComponent {

  dateProcess:Date;
  @Input() accountList: any[] = [];
  constructor() {

    this.dateProcess=new Date();
  }

}
