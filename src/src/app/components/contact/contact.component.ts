import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    mobile: [''],
    subject: [''],
    message: ['']
  });

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  onSubmit() {
    if (this.contactForm.valid)
      this.emailService.send(this.contactForm.getRawValue());
  }
}
