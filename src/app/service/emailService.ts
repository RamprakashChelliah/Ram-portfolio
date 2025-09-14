import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root',
})
export class EmailService {
    private apiUrl = "https://portfolio-server-nhmv.onrender.com/email";
    //private apiUrl = "http://localhost:3000/email";

    constructor(private http: HttpClient) {
    }

    sendMail(subject: string, fullName: string, email: string, text: string){
        const emailData = { subject, fullName, email, text };
        this.http.post(this.apiUrl, emailData, {headers: { "Content-Type": "application/json" }})
        .subscribe();
    }
}