import { Component } from '@angular/core';
import { DownloadFileService } from '../service/download-file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  shouldOpenContact = false;
  private pathURL = "assets/CV/Resume.pdf"

  constructor(private downloadServie: DownloadFileService){
    this.shouldOpenContact = false;
  }

  onClickDownloadCV(){
    this.shouldOpenContact = true;
  }

  downloadCV(){
    this.downloadServie.downloadFile(this.pathURL)
    .subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'Ramprakash CV.pdf';
        anchor.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Download error', err);
      }
    });
  }

  onCloseContactForm(){
    this.shouldOpenContact = false;
  }

  onCloseContactFormWithDownloadCV(eventData: any){
    this.onCloseContactForm();

    if(eventData.isRequestSubmitted){
      this.downloadCV();
    }
  }
}
