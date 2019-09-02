import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { IMessage } from './IMessage';

@Component({
    selector : 'contact',
    styles: ['agm-map { height: 300px; /* height is required */ }'],
    templateUrl : './contact.component.html?ver=2'
})

export class ContactComponent {
    message: IMessage;
    errorMessage : string;
    latitude = 30.464604;
    longitude = -97.611636;
    mapType = 'roadmap';
    contactForm : FormGroup;
    submitted : boolean;
    isEmailSent : boolean;
    showLoader : boolean;

    constructor(private contactService : ContactService, private formBuilder : FormBuilder){
        this.message = {FullName: "", PhoneNumber: "", Email : "", Description: ""};
        this.submitted = false;
        this.isEmailSent = false;
        this.showLoader = false;

        this.contactForm = this.formBuilder.group({
            fullName: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
            description: ['', Validators.required]
        });
    }
    
    get f() { return this.contactForm.controls; }
    public sendMessage(){
        this.submitted = true;
        this.showLoader = true;
        if(this.contactForm.invalid){
            return;
        }

        this.contactService.sendMessage(this.message).subscribe(() => {
            this.message = {FullName: "", PhoneNumber: "", Email : "", Description: ""};
            this.submitted = false;
            this.isEmailSent = true;
            this.showLoader = false;
        }, error => {
            this.errorMessage = error;
            this.showLoader = false;
            this.submitted = false;
        });
    }
}