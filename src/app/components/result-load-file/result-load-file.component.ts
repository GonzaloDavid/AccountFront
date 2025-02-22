import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadfileService } from 'src/app/services/loadfile.service';


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
  providers: [MessageService, LoadfileService, HttpClient]
})
export class ResultLoadFileComponent {

  constructor(private messageService: MessageService,
    private loadFileService:LoadfileService
  ) {}

  onUpload(event: UploadEvent) {

    this.loadFileService.updateLoadFile(event.files[0], 'file').subscribe({
      next: (result) => {
        console.log('Proceso OK:', result);
      },
      error: (error) => {
        console.error('Error al subir el archivo:', error);
      }
    });
    
    console.log('Enviando archivo al servidor', event);
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

}
