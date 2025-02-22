import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tracking-file',
  templateUrl: './tracking-file.component.html',
  styleUrls: ['./tracking-file.component.scss'],
  standalone: true,
  imports: [TableModule],
})
export class TrackingFileComponent {

  @Input() trackingList: string[];

  constructor() {
    this.trackingList = [];
  }



}
