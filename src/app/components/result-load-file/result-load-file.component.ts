import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-result-load-file',
  standalone: true,
  imports: [TableModule, ButtonModule, TabViewModule, CommonModule, InputTextModule, FileUploadModule, ToastModule, HttpClientModule],
  templateUrl: './result-load-file.component.html',
  styleUrls: ['./result-load-file.component.scss'],
  providers: [MessageService]
})
export class ResultLoadFileComponent {

  constructor(private messageService: MessageService) {}

  onUpload(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

}
