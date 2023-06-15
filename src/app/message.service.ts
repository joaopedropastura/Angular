import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Message[]>("https://localhost:7155/message/");
  }
  add(message: Message) {
    return this.http.post("https://localhost:7155/message", message);
  }
}