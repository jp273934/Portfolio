import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
    selector : 'contact',
    templateUrl : './contact.component.html?ver=2'
})

export class ContactComponent {
    MessageForm : any;
    errorMessage : string;

    constructor(private contactService : ContactService){
        this.MessageForm = {};
    }

    ngOnInit(){
        this.contactService.sendMessage().subscribe(()=> {

        }, error => {
            this.errorMessage = error;
        })
    }
}