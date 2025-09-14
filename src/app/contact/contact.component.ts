import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../service/emailService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailId = "ramprakashc.job@gmail.com";
  mobileNumber = 1234567890;
  contactForm: FormGroup;

  constructor(private emailService: EmailService) {
  }

  ngOnInit() {
    this.formInitialize();
  }

  formInitialize() {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]),
    });
  }

  onSubmit() {
    console.log("hit")
    this.emailService
      .sendMail("Request to contact", this.contactForm.get('fullName').value,
        this.contactForm.get('email').value, this.contactForm.get('message').value);

    this.formInitialize();
  }
}
