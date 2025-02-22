import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { map, Observable } from 'rxjs';

const headers = new HttpHeaders()
  .set('Content-Type', 'application/json; charset=utf-8')
  .set('Authorization',  '');

@Injectable({
  providedIn: 'root'
})
export class LoadfileService {

  private uriBackend: string;
  constructor(
    private http: HttpClient, 
    private urlService: ConfigService

  ) { 
    this.uriBackend = this.urlService.getUrl() + '/account/resources/bulkAccount/';
  }

  updateLoadFile(file: File, namefile: string): Observable<any> 
  {
    let url = `http://localhost:9080/account/resources/bulkAccount/uploadloadFile`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('namefile', namefile);

    return this.http.post(url, formData).pipe(map((res: any) => res as any));
  }
}
