import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
    selector : 'contact',
    styles: ['agm-map { height: 300px; /* height is required */ }'],
    templateUrl : './contact.component.html?ver=2'
})

export class ContactComponent {
    MessageForm : any;
    errorMessage : string;
    latitude = 30.464604;
    longitude = -97.611636;
    mapType = 'roadmap';

    constructor(private contactService : ContactService){
        this.MessageForm = {};
    }

    ngOnInit(){
       /*  this.contactService.sendMessage().subscribe(()=> {

        }, error => {
            this.errorMessage = error;
        }) */
    }
}