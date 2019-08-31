import { Component } from '@angular/core';
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

    constructor(private contactService : ContactService){
        this.message = {FullName: "", PhoneNumber: "", Email : "", Description: ""};
    }

    public sendMessage(){
        this.contactService.sendMessage(this.message).subscribe(() => {
            this.message = {FullName: "", PhoneNumber: "", Email : "", Description: ""};
        }, error => {
            this.errorMessage = error;
        });
    }
}