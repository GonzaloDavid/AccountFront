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
import { AccountListComponent } from '../account-list/account-list.component';
import { ResponseLoadFile } from 'src/app/model/ResponseLoadFile';


interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-result-load-file',
  standalone: true,
  imports: [TableModule, ButtonModule, TabViewModule, CommonModule, InputTextModule, FileUploadModule, ToastModule, HttpClientModule, AccountListComponent],
  templateUrl: './result-load-file.component.html',
  styleUrls: ['./result-load-file.component.scss'],
  providers: [MessageService, LoadfileService, HttpClient]
})
export class ResultLoadFileComponent {

  responseLoadFile:ResponseLoadFile;

  constructor(private messageService: MessageService,
    private loadFileService:LoadfileService
  ) {
    this.responseLoadFile=new ResponseLoadFile();
  }

  onUpload(event: UploadEvent) {

    this.loadFileService.updateLoadFile(event.files[0], 'file').subscribe({
      next: (result) => {
        console.log('Proceso OK:', result);
        this.responseLoadFile= result;
      },
      error: (error) => {
        console.error('Error al subir el archivo:', error);
      }
    });
    
    console.log('Enviando archivo al servidor', event);
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

}
