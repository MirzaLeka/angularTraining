import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css'],
  providers: [SendDataService]
})
export class NewcompComponent implements OnInit {

  message: string;

  constructor(private data: SendDataService) {

    this.newMessage();
   }

  ngOnInit() {
    this.data.currentMsg.subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage('Hello World!');
  }

}
