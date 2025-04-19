import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../service/emailService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  emailId = "ramprakashc069@gmail.com";
  mobileNumber = 7695830346;
  contactForm: FormGroup;

  constructor(private emailService: EmailService){

  }

  ngOnInit(){
    this.formInitialize();
  }

  formInitialize() {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl(),
    });
  }

  onSubmit(){
    this.emailService
    .sendMail("Request to contact", this.contactForm.get('fullName').value, 
    this.contactForm.get('email').value, this.contactForm.get('message').value)
    .subscribe(respose => {
      console.log("Email sent:", respose)
    });
  }
}
