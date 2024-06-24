import { Injectable } from '@angular/core';
import { MailSlurp } from 'mailslurp-client';
import { Contact } from "./../models/contact.model";

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    async send(contact: Contact) {
        const mailslurp = new MailSlurp({ apiKey: "4a7e9d342098fb2be3431e75d13333b6fe75d5ab4487dc13f4ad3a37b2ffd424" });

        let message = `
            <b>Fullname: </b> ${contact.name} </br>
            <b>Email: </b> ${contact.email} </br>
            <b>Mobile: </b> ${contact.mobile} </br>
            <b>Subject: </b> ${contact.subject} </br>
            <b>Message: </b> ${contact.message} </br>
        `;

        const options = {
            to: ['anes.smajic95@hotmail.com'],
            cc: [contact.email!],
            subject: contact.subject,
            body: message,
            isHTML: true,
            useInboxName: true
        };

        await mailslurp.sendEmail("29ef1ec3-277f-452f-a539-8a164cf973e9", options);
    }
}
