import { Component } from '@angular/core';

@Component({
    selector : 'contact',
    templateUrl : './contact.component.html?ver=2'
})

export class ContactComponent {
    MessageForm : any;

    constructor(){
        this.MessageForm = {};
    }
}