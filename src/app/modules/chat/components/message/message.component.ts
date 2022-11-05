import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/types';

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {

  @Input() data:IMessage

  constructor() { 
    this.data = { id: "", userId: "", text:"",date:'',roomId:'' } 
  }

  ngOnInit(): void {
  }
}
