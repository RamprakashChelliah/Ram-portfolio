import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private http: HttpClient) { }

  downloadFile(filePath: string){
    return this.http.get(filePath, {
      responseType: 'blob'
    })
  }
}
