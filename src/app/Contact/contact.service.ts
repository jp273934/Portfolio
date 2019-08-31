import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMessage } from './IMessage';

@Injectable()
export class ContactService {
    constructor(private http: HttpClient){}

    public sendMessage(message : IMessage){
        return this.http.post('/api/Message', message);
    }
}