import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
    constructor(private http: HttpClient){}

    public sendMessage(){
        return this.http.get('/api/Message');
    }
}