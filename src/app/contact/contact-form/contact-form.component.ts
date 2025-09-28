import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/service/emailService';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  shouldOpenContact = false;
  emailId = "ramprakashc.job@gmail.com";
  contactForm: FormGroup;
  @Output() dataEvent = new EventEmitter<any>();

  constructor(private emailService: EmailService) {
  }

  ngOnInit() {
    this.shouldOpenContact = true;
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
    this.emailService
      .sendMail("Request to contact", this.contactForm.get('fullName').value,
        this.contactForm.get('email').value, this.contactForm.get('message').value);

    this.formInitialize();
    this.onCloseContactForm(true);
  }

  onCloseContactForm(isRequestSubmitted: boolean) {
    this.shouldOpenContact = false;
    this.dataEvent.emit({ shouldOpenContact: false, isRequestSubmitted: isRequestSubmitted});
  }
}
