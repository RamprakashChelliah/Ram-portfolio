import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root',
})
export class EmailService{
    private apiUrl = "http://localhost:3000/email";

    constructor(private http: HttpClient){

    }

    sendMail(subject: string, fullName: string, email: string, text: string): Observable<any>{
        console.log(this.apiUrl);
        const emailData = {subject, fullName, email, text};
        return this.http.post(this.apiUrl, emailData);
    }
}